import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ExternalLink, Github, Star, GitFork, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [username] = useState("GarcianoNilo");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const { toast } = useToast();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
        setFilteredRepos(data);
      } catch (error) {
        toast({
          title: "Error fetching repositories",
          description: "Please check the GitHub username and try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, toast]);

  // Filter repos based on search and language
  useEffect(() => {
    let filtered = repos;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(repo => 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by language
    if (selectedLanguage !== "all") {
      filtered = filtered.filter(repo => repo.language === selectedLanguage);
    }

    setFilteredRepos(filtered.slice(0, 6)); // Show only top 6
  }, [searchTerm, selectedLanguage, repos]);

  // Get unique languages
  const languages = ["all", ...Array.from(new Set(repos.map(r => r.language).filter(Boolean)))];


  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full"></div>
          
          <p className="text-center text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Here are some of my recent projects from GitHub. Feel free to explore and check out the code!
          </p>

          {/* Search and Filter */}
          <div className="mb-6 sm:mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects..."
                  className="pl-9 sm:pl-10 bg-card border-border focus:border-primary transition-colors text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              <div className="flex gap-2 items-center w-full sm:w-auto">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="px-3 sm:px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground text-sm sm:text-base w-full sm:w-auto"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>
                      {lang === "all" ? "All Languages" : lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="bg-gradient-card border-border animate-pulse">
                  <CardHeader className="space-y-2">
                    <div className="h-5 sm:h-6 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 sm:h-4 bg-muted rounded w-full"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 sm:h-4 bg-muted rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredRepos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-base sm:text-lg">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredRepos.map((repo, index) => (
                <Card 
                  key={repo.id} 
                  className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105 group flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-2">
                    <CardTitle className="flex items-center justify-between gap-2">
                      <span className="truncate text-base sm:text-lg">{repo.name}</span>
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </CardTitle>
                    <CardDescription className="line-clamp-2 min-h-[40px] text-xs sm:text-sm">
                      {repo.description || "No description available"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex items-center flex-wrap gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="truncate">{repo.language}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        {repo.forks_count}
                      </span>
                    </div>
                    
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span 
                            key={topic} 
                            className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-primary/10 text-primary rounded truncate max-w-[100px]"
                            title={topic}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex gap-2 mt-auto">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm h-8 sm:h-9"
                        onClick={() => window.open(repo.html_url, '_blank')}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Code
                      </Button>
                      {repo.homepage && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-xs sm:text-sm h-8 sm:h-9"
                          onClick={() => window.open(repo.homepage, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Live
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
