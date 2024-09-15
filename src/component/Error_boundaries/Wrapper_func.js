import { useEffect } from "react";
import { useState } from "react";
function Wrapper_func({children})
{
    const [error, setError] = useState(null);

    useEffect(() => {
      const handleError = (error) => {
        setError(error);
      };
      console.log("i m here")
      window.addEventListener('error', handleError);
  
      return () => {
        window.removeEventListener('error', handleError);
      };
    }, []);
    
    if (error) {
        return (
          <div>
            <p>An error occurred: {error}</p>
          </div>
        );
      }
    
      return children;
}
export default Wrapper_func