import React, { Component } from 'react';

class loops extends Component {
    render() {
        const data = ["Harsh Kuhikar",1,2,3,4,5,6,"ronaldo",8,9,"virat Kohli"]
        // console.log(data);
        // for of 
        // for(let newdata of data)
        // {
        //     console.log(newdata);
        // }

        // for in 
        // for(let d of data)
        // {
        //     console.log(data[d]);
        // }

        // foreach
        // data.forEach(element => {
        //     console.log(element);
        // });
        
        // map
        const a = data.map((res)=>{
            console.log(res);
            return <h1>{res}</h1>
        })
        
        
        
        return (
            <div>
                <div className="container">
                    {a}
                </div>
            </div>
        );
    }
}

export default loops;