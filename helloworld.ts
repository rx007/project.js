class HelloWorld
{
    constructor(public displayText : string) {}

    greet()
    {
        return this.displayText;
    }
}

var helloWorld = new HelloWorld("HelloWorld");
document.body.innerHTML = helloWorld.greet();
