instructions
Requirement
1. Install Wamp with 7.2 php for symfony 4 this is required for some module of symfony
2. Install npm and angular-cli v 1.7.4  
   npm install -g @angular/cli@1.7.4
3. Open port 8000 and 42000
4. Using default 3306 as mysql port



1. Extract folders in any directory applications.zip is the angular app and riolib-app.zip is symfony app

2. Run xampp php and mysql service

3. Add database to mysql 

4. Import the symfony_riolib.sql in phpmyadmin riolib.zip

5. In symfony app run php bin/console fos:user:create - add username, email, password
       run this  php bin/console fos:user:create  on path where you can see the instructions.txt

6. In symfony app run local symfony server open the symfony directory in cmd and run
       run this  command below  on path where you can see the instructions.txt
       php bin/console server:run --port 8000 

7. Run local angular app (application.zip)
       run this command on path where you can see the instructions.txt
       ng serve --port 4200

8. View Site  
	localhost:4200/

9. Login using admin at localhost:4200/login
	username : chill 
	password : asdf

	or create your own admin
	-  In symfony folder run php bin/console fos:user:create - add username, email, password
	-  After user created
	-  Run php bin/console fos:user:promote -specify the username and the when asked for role type ROLE_ADMIN not ADMIN_ROLE

10. Login as a regular user with no admin rights 
    localhost:4200/login  
    username: mlp
    password: asdf

