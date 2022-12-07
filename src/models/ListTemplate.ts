/*
    1. register a list container in the constrautor
    2. create a render method to render a new li to the container
        - accepts arguments
        - create html template
        - add li to start/end of list


*/

import { HasFormatter } from "../interfaces/HasFormatter";
import { Payment } from "./payment";
import { Invoice } from "./invoice"

export class ListTemplate {
    constructor(private container: HTMLUListElement){}

    render(item: HasFormatter, heading: string, position: 'start' | 'end') {
        const li = document.createElement('li')

        const h4 = document.createElement('h4')
        h4.innerText = heading

        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format()
        li.append(p)

        if(position === 'start') {
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}