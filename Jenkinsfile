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
            bat ""
         bat "cd site && npm install"
           bat " npm run build"
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
