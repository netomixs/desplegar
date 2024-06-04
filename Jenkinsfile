pipeline {
  agent any
    
  tools {nodejs "Node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/netomix/desplegar/main'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm i -g serverless'
         sh 'serverless init fullstack-app'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
