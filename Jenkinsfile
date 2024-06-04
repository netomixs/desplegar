pipeline {
  agent any
    
  tools {nodejs "Node"}
    
  stages {
        
    stage('Git') {
      steps {
                git branch: 'main', url: 'https://github.com/netomixs/desplegar.git'
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
