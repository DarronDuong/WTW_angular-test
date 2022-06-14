Info:

The solution contains a standard Asp.Net Core project with an Angular cli project. You may need to install the dotnet sdk for version 5 to run the dotnet project.

https://dotnet.microsoft.com/download/visual-studio-sdks

Before the first run use the command "npm i" in a terminal window within the clientApp folder to build your Node Modules folder for the Angular Project.

Using Visual Studio F5 will build both the server side and client side code and launch the website.

Once running the client side code (found in ClientApp/src) can be edited in Visual Studio or any other IDE (e.g. VSCode) and will be rebuilt as files are changed and saved.

There is a single server side API controller called PolicyController that has a very simple implementation of a repository for storing policies of the following format:

Each policy has the following structure and data classes are already provided:
{
	PolicyNumber: int,
	PolicyHolder: {
		Name: string,
		Age: int,
		Gender: enum
	}
}

Requirements:

1. A website is required that will display all policies from the repository.
2. It should be possible to do CRUD operations on Policies.
3. It is up to you how you design the website and CRUD operations.
4. You may use existing CSS/frameworks to create a professional looking front end.
