function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        job: 'developer',
        skills: ['html', 'css', 'js'],
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(this.name + ' knows ' + skill);
            });
        }
    };
    member.showSkills();
}