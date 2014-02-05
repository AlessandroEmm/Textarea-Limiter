// validation code inspired by http://stackoverflow.com/questions/14259580/textarea-with-limited-lines-and-char-limits
window.onload = function() {
  var textarea = document.getElementById("testArea");

  textarea.onkeyup = function() { 
    
    function checkLimit(arr, maxLineChars,  maxLines){
      if (typeof(arr) === "undefined") return []
      
        function loop(inA, outA, remainder){
            // Pop item out of the incoming array for preparation
            var item = inA.pop()
            
            // the remainder gets appended to the next line
            if(remainder !== "") outA.push(remainder)
            
            // check whether array is empty by determining pop's result
            // if empty we return the outgoing list
            if (typeof(item) === "undefined") 
              return outA
  
            // cut the remainder off the next line
            remainder = item.slice(maxLineChars)
            
            // ..and leave the head for th regular push to the
            // outgoing list
            var line = item.slice(0, maxLineChars)
            outA.push(line)
            
            //Recursively loop through the remaining entries in the
            // incoming list
            return loop(inA, outA, remainder) 
          
        }
        
      // limit the textArea to the given maxLines
      var textArea = arr.slice(0, maxLines)
      // start the tail-rec looping through the incoming textarea
      var reversedList = loop(textArea.reverse(), [], "").reverse()
      
      // reverse the list at the end due to stupid limitation of the
      // very basic JS functions on arrays
      return reversedList.reverse()
    }
    
  // Example Usage  
  this.value = checkLimit(this.value.split("\n"), 16, 4).join("\n")

    
  }

  
  


};