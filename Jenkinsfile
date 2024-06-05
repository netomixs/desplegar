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
  
         bat "cd site && npm install && npm run build"
 
      }
    }  
    
            
    stage('Test') {
      steps {
        bat 'cd site && node test'
      }
    }
  }
}
