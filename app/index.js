import SuperPerson from './person';

const Alan = new SuperPerson('Alan', 'speaking with a Scottish accent');
const Ana = new SuperPerson('Ana', 'HUNTER STUFF');
const Day = new SuperPerson('Day', 'casting magic spells');

Alan.greet();

Ana.greet();

Day.greet();

Alan.saySuperpower();
Ana.saySuperpower();
Day.saySuperpower();