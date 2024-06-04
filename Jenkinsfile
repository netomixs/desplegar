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
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
