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
     def subDir = 'site'
        bat 'serverless init fullstack-app'
            bat "cd ${subDir} && serverless init fullstack-app"
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
