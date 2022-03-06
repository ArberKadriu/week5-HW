class Member{ // class for the member functions
    constructor(name,status){
        this.name = name;
        this.status = status;
    }

    describe(){
        return `${this.name} is the ${this.status}.`;
    }
}
class Club {
    constructor(name){
        this.name = name;
        this.members = [];
    }

    addMember(member) {
        if(member instanceof Member){
            this.members.push(member);
        } else {
            throw new Error(`You can only add instance of member. ${member} is not a valid entry `);
        }
    }

    describe() {
        return `${this.name} has ${this.members.length} members`;
    }
}
class Menu { // Main menu class
    constructor(){
        this.clubs = [];
        this.selectedClub = null;
    }

    start(){ 
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createClub();
                    break;
                case '2':
                    this.viewClub();
                    break;
                case '3':
                    this.displayClubs();
                    break;
                case '4':
                    this.deleteClub();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Program ended');
    }

    showMainMenuOptions(){
        return prompt(`
        0: Exit
        1: Create club
        2: View club
        3: Display all clubs
        4: Delete club
        `);
    }

    showClubMenuOptions(clubInfo){
        return prompt(`
        0: Go back
        1: Create Member
        2: Delete Member
        ****************
        ${clubInfo}`);
    }

    displayClubs(){
        let clubString = '';
        for(let i = 0; i < this.clubs.length; i++){
            clubString += i + ': ' + this.clubs[i].name + '\n';
        }
        alert(clubString);
    }

    createClub(){
        let name = prompt('Enter name for new club: ');
        this.clubs.push(new Club(name));
    }

    viewClub() {
        let index = prompt('Enter the index of the club you would like to see: ');
        if(index > -1 && index < this.clubs.length) {
            this.selectedClub = this.clubs[index];
            let description = 'Club Name: ' + this.selectedClub.name + '\n';

            for(let i = 0; i < this.selectedClub.members.length; i++) {
                description += i + ' : ' + this.selectedClub.members[i].name + 
                ' - ' + this.selectedClub.members[i].status + '\n';
            }

            let selection = this.showClubMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createMember()
                    break;
                case '2':
                    this.deleteMember();

            }
        }
    }

    deleteClub() {
        prompt ('Enter the index of the club you wish to delete');
        if(index > -1 && index < this.clubs.length) {
            this.clubs.splice(index, 1);
        }
    }

    createMember(){
        let name  = prompt('Enter name for new member: ');
        let status = prompt('Enter status for new member: ');
        this.selectedClub.members.push(new Member(name,status));
    }

    deleteMember(){
        let index = prompt('Enter the index of the member you wish to delete');
        if(index > -1 && index < this.selectedClub.members.length){
            this.selectedClub.members.slice(index, 1);
        }
    }

}

let menu = new Menu();

menu.start();