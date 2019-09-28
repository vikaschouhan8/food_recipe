import React, { Component } from 'react'

export default class Greater extends Component {
    render() {
        let a=1
        let b=2
        let c=3
        if(a>b){
            if(a>c)
                console.log(a)
            else 
                console.log(c)
        }
        else if(b>c)
                console.log(b)
            else
                console.log(c)
        return (
            <div>
                fgdfgdfg
            </div>
        )
    }
}
