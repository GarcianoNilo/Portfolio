import sys
import socket
import subprocess
import datetime

# 1. DEFINE THE TARGET
# We take the target IP/Domain from the command line argument
if len(sys.argv) == 2:
    target = sys.argv[1]
else:
    print("Syntax Error! Usage: python3 auto_recon.py <ip_or_domain>")
    sys.exit()

print("-" * 50)
print(f"Starting Reconnaissance on target: {target}")
print(f"Time started: {str(datetime.datetime.now())}")
print("-" * 50)

# --- FUNCTION 1: BANNER GRABBING (Python Socket) ---
# This connects to a port and asks "Who are you?"
def grab_banner(ip, port):
    try:
        # Create a socket object (like plugging in a cable)
        s = socket.socket()
        s.settimeout(2) # Don't wait forever
        s.connect((ip, port))
        
        # Send a dummy byte if needed, or just listen
        # Some servers require you to speak first, others say hello immediately.
        # For this simple lab, we just listen.
        banner = s.recv(1024)
        return banner.decode().strip()
    except:
        return "No Banner / Connection Refused"

# --- FUNCTION 2: NMAP AUTOMATION (Subprocess) ---
# This runs the actual Nmap command for you
def run_nmap(ip):
    print(f"\n[+] Running Nmap Fast Scan on {ip}...")
    try:
        # Runs 'nmap -F <ip>' in the terminal
        # -F means "Fast Mode" (Top 100 ports)
        command = f"nmap -F {ip}"
        process = subprocess.run(command, shell=True, capture_output=True, text=True)
        print(process.stdout)
    except Exception as e:
        print(f"Error running Nmap: {e}")

# --- EXECUTION ---
try:
    # 1. Get IP address (DNS Resolution)
    target_ip = socket.gethostbyname(target)
    print(f"[+] Target IP resolved: {target_ip}")

    # 2. Grab Banners from common ports
    # We check Port 21 (FTP), 22 (SSH), 80 (HTTP) as examples
    ports_to_check = [21, 22, 80, 443]
    print("\n[+] Attempting Banner Grabs...")
    for port in ports_to_check:
        banner = grab_banner(target_ip, port)
        print(f"    Port {port}: {banner}")

    # 3. Run Nmap
    run_nmap(target_ip)

except socket.gaierror:
    print("\n[!] Error: Hostname could not be resolved.")
except socket.error:
    print("\n[!] Error: Couldn't connect to server.")
except KeyboardInterrupt:
    print("\n[!] Exiting program.")
    sys.exit()

print("-" * 50)
print("Reconnaissance Finished.")