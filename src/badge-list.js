import { LitElement, html, css } from 'lit';
import "./badge-template";


export class MyBadgeList extends LitElement{

    static get tag() {
        return 'mybadge-list';
    }

    static get properties() {
        return {
            badges: { type: Array },
            searchForThis: { type: String }
        }

    }

    constructor() {
        super();
        this.badges = [];
        this.updateBadges();
        this.searchForThis = '';
        this.searchThis(this.badges,this.searchForThis);
    }



    updateBadges() {
        const address = '../api/badgearray';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.badges = data;
        });
    }

    searchThis(items, searchForThis){
        return items.filter((thing) => 
        {
          for (var item in thing)
          {
            if (thing[item].toString().toLowerCase().includes(searchForThis.toLowerCase()))
            {
              return true;
            }
          }
          return false;
        });
    }




    static get styles(){
        return css`
        
        
        .box {
            width: 100%;
            border: 2px solid lightgray;
            display: block;
            overflow: auto;
            height: 510px;
        }
        .item {
            display: inline-flex;
        }


    `;
    }
    

    render() {
        return html`
        <div class="box">
            
            
            ${this.searchThis(this.badges,this.searchForThis).map(badge => html`
            <div class="item">
                <badge-template authorName="${badge.authorName}" fieldName="${badge.fieldName}" 
                courseCategory="${badge.courseCategory}" badgeIcon="${badge.badgeIcon}" badgeColor="${badge.badgeColor}"></badge-template>
            </div>
            `)}

        </div>



        `;
    }
    
}

customElements.define(MyBadgeList.tag, MyBadgeList);