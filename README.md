Twingate CLI Tool
===========================
This is a command line application demonstrating various usages of the Twingate API.


Setup
===========================
* Download the lastest release cli-{version}-{os}-{cpu architecture}.zip from https://github.com/Twingate-Labs/tg-cli/releases/latest<br />
* Unzip the downloaded zip file


Windows
===========================
* Open Command Prompt
* Test
  * ```\path\to\tg.exe --help``` e.g. ```G:\tg.exe --help``` or 
  * ```cd \path\to\tg.exe``` followed by ```tg.exe --help```


Linux
===========================
* Open Linux Terminal
* Test
  *  ```/path/to/tg --help``` e.g. ```/apps/tg --help``` or 
  *  ```cd \path\to\tg``` followed by ```./tg --help```


Mac
===========================
* Open Mac Terminal
* Test
  *  ```/path/to/tg --help``` e.g. ```/apps/tg --help``` or 
  *  ```cd \path\to\tg``` followed by ```./tg --help```


Example Commands
===========================
**Show command usage**

``./tg --help``

``./tg group --help``

``./tg export --help``

**Export Excel file**

``./tg export``

**Export PNG image**

``./tg export --format png``

*Note: Requires the [GraphViz](https://graphviz.gitlab.io) package to be [installed](https://graphviz.gitlab.io/download/#executable-packages) and available on your path.*

**List resources**

``./tg resource list``


**Import Groups, Remote Networks and resources into a new account**

``./tg import -a [new account name] -nrg -f [path to file to import from (format must be as outputted by the export command)]``

Need Help?
===========================
If you are experiencing any issues, create a new issue [here](https://github.com/Twingate-Labs/tg-cli/issues/new).