# CompassPlus

# First Time Set up

To import the project to your local directory, 
		git clone [https://github.com/wilyyy/CompassPlus.git](https://github.com/wilyyy/CompassPlus.git)

After cloning, install all currently installed dependencies (whatever is currently on package.json) using:
		yarn install

side note: 
		when installing new dependencies, remember that we are using yarn as a package manager so don't use npm install. it's usually not a good idea to mix the two.
		look up the yarn way of installing that package in google then copy that code into terminal
		
		
#Making Changes

When adding new code or any changes, put the 2 lines below into terminal

		git branch branch-name  
			/* this will create a new branch with name branch-name (can be named anything, usually named after features/components you plan to add) */

		git checkout branch-name
			/*this will move you into the branch you just made and all changes you push will only be added into that branch until it is merged into master branch*/

		side note: git checkout master will move you back into the master branch


#Pushing Changes Once You're Done

		Put the following into your terminal
			git add .
			git commit -m "write a message describing the change you made"
			git push origin branch-name
			
		Then go to https://github.com/wilyyy/CompassPlus and merge your branch to the master branch using a pull request and merge.
