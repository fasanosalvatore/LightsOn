FROM ubuntu:latest
COPY . /funcs
RUN apt-get update -q -y
RUN apt-get install docker.io curl wget -q -y
RUN curl -s https://api.github.com/repos/nuclio/nuclio/releases/latest | grep -i "browser_download_url.*nuctl.*$(uname)" | cut -d : -f 2,3 | tr -d \" | wget -O nuctl -qi - && chmod +x nuctl
RUN chmod +x ./funcs/start.sh
CMD ["./funcs/start.sh"]
