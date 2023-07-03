pipeline {
    agent any
    
    stages {
        
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
       // stage('Test') {
         //   steps {
           //     sh './jenkins/scripts/test.sh'
          //  }
        //}
        stage('Deliver') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
