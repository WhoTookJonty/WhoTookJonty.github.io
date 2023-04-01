# CFL-UI






**GitHub Instructions (Command Line Interface) - VSCode has an extension that makes this far easier, see Pass Down Docs:**

**---Set up a Fork----**
1. While in the Main LU-CS-Capstone/CFL-22-23 branch, select Fork in type right corner, create new fork.
2. In the new fork, select 'Code' and copy the link it provides
3. Go to your Git Bash and travel to the directory where you want local Repository to be.
4. In the command line, type the command: git clone <url from Fork>
5. You know have a copy of your online fork. 


**-----Commit changes to Fork----**
1. Make changes to whatever file you are changing.
2. git status --> this will show what files have been modified (red means not ready to be committed)
3. git add (filename) OR git add .  (the period means add all files that were changed)
4. git status --> this should now show the files ready to be committed in green
5. git commit -m "message here" --> this will commit the files to be pushed with a short description
6. git push --> this will push changes to the fork


**-------Create a Pull request to the Main branch from the Fork------**
1. Select 'Contribute'
2. Select 'Create Pull Request'
3. Github will tell you if the changes can be merged (there might be merge conflicts if someone else has already edited the same file)
4. Select 'merge' to finalize the chnages


**------Sync your Fork to Main Branch-------**
1. Select 'Sync Fork'
2. This will bring your Fork up to date with the Main Branch if it is behind in commits 


