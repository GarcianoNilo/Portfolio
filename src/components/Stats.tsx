import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { GitFork, Star, BookOpen, Code2 } from "lucide-react";

interface GitHubStats {
  public_repos: number;
  followers: number;
  total_stars: number;
  total_forks: number;
}

const Stats = () => {
  const [stats, setStats] = useState<GitHubStats>({
    public_repos: 0,
    followers: 0,
    total_stars: 0,
    total_forks: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userResponse = await fetch("https://api.github.com/users/GarcianoNilo");
        const userData = await userResponse.json();
        
        const reposResponse = await fetch("https://api.github.com/users/GarcianoNilo/repos?per_page=100");
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);

        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          total_stars: totalStars,
          total_forks: totalForks,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    { label: "Repositories", value: stats.public_repos, icon: BookOpen, color: "text-primary" },
    { label: "Total Stars", value: stats.total_stars, icon: Star, color: "text-yellow-500" },
    { label: "Total Forks", value: stats.total_forks, icon: GitFork, color: "text-secondary" },
    { label: "Followers", value: stats.followers, icon: Code2, color: "text-purple-400" },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statItems.map((item, index) => (
              <Card 
                key={item.label}
                className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                  <div className="text-3xl font-bold mb-1">
                    {loading ? (
                      <div className="h-8 bg-muted animate-pulse rounded"></div>
                    ) : (
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {item.value}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
