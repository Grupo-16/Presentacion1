pipeline {
    agent any
    
    stages {
        
        stage('Build') {
            steps {
                npm install
            }
        }
       // stage('Test') {
         //   steps {
           //     sh './jenkins/scripts/test.sh'
          //  }
        //}
        stage('Deliver') {
            steps {
                npm run build
            }
        }
    }
}
