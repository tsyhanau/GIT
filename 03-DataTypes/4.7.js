//  Write a script that parses an URL address given in the format: `[protocol]:
//  //[server]/[resource]` and extracts from it the `[protocol]`, `[server]` and 
//` [resource]` elements. Return the elements in a JSON object.

 function func(url) {
            var parsUrl = {
                protocol: '',
                server: '',
                resource: '',
                toString: function () {
                    return '{protocol: "' + this.protocol +
                           '", server: "' + this.server +
                           '", resource: "' + this.resource + '"}'
                }
            }
            
            parsUrl.protocol = url.match(/(.*):\/\//)[1];
            parsUrl.server = url.match(/:\/\/(.*?)\//)[1];
            parsUrl.resource = url.match(/[a-zA-Z](\/.*)/)[1];
            document.write(parsUrl.toString());
        }
        
        func(`http://www.tut.by/forum/index.php`);