pipeline {
    agent any
    
    stages {
        
        stage('Build') {
            steps {
                bat 'cd tasknow'
                bat 'npm install'
            }
        }
       // stage('Test') {
         //   steps {
           //     sh './jenkins/scripts/test.sh'
          //  }
        //}
        stage('Deliver') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
