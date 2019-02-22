node {
  def app
  
  stage('Clone Repo') {
    checkout scm
  }
  
  stage('Build Image') {
    app = docker.build("jessehallam/jessehallamca")
  }
  
  stage('Test Image') {
    app.inside {
      sh 'echo "Test Passed"'
    }
  }
  
  stage('Push Image') {
    docker.withRegistry("https://registry.hub.docker.com", "docker-hub-credentials") {
      app.push("${env.BUILD_NUMBER}")
      app.push("latest")
    }
  }
}
