# CompassPlus

## FIRST TIME SET UP

To import the project to your local directory, 

	git clone https://github.com/wilyyy/CompassPlus.git

After cloning, install all currently installed dependencies (whatever is currently on package.json) using:

	yarn install

When installing new dependencies, remember that we are using yarn as a package manager so don't use npm install. 
It's usually not a good idea to mix the two.
Look up the yarn way of installing that package in google then copy that install command into terminal.
It usually looks like yarn add thingy instead of npm install thingy
		
		
## MAKING CHANGES

When adding new code or any changes, put the 2 lines below into terminal before coding

	git branch branch-name  
	/* this will create a new branch with name branch-name (can be named anything, usually named after features/components you plan to add) */

	git checkout branch-name
	/*this will move you into the branch you just made and all changes you push will only be added into that branch until it is merged into master branch*/

side note: git checkout master will move you back into the master branch


## PUSHING YOUR CHANGES ONCE YOU ARE DONE

Put the following into your terminal

	git add .
	git commit -m "write a message describing the change you made"
	git push origin branch-name
			
Then go to https://github.com/wilyyy/CompassPlus and merge your branch to the master branch using a pull request and merge.

## PULLING LATEST VERSION OF THE APP INTO YOUR LOCAL MACHINE

While making sure you are on your branch, put the following command into your terminal to pull the latest changes from the master branch onto your computer
		
	git pull origin master

If there have been any new dependencies installed since you last pulled from master, remember that you can use the 'yarn install' command to install all that is missing from your local version of the app.

