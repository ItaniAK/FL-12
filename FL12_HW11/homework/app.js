const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

//icons
const folderIcon = `<i class="material-icons folderColor">folder</i>`;
const fileIcon = `<i class="material-icons fileColor">insert_drive_file</i>`;

//titles
const folderFilmTitle = structure[0].title;
const filmIronMen = structure[0].children[0].title;
const folderFantasyTitle = structure[0].children[1].title;
const filmLordOfRing = structure[0].children[1].children[0].title;
const newFolder1 = structure[0].children[1].children[1].title;
const documents = structure[1].title;
const hw = structure[1].children[0].title;



//creation elements
//film folder
const container = document.createElement('ul');
const folderFilm = document.createElement('li');

//iron men file
const subContainer = document.createElement('ul');
const filmIron = document.createElement('li');

//fantasy folder
const folderFantasy = document.createElement('ul');

//lord film
const subSubContainer = document.createElement('ul');
const filmLord = document.createElement('li');

// new folder
const folderNew = document.createElement('ul');

//empty container
const emptyFolder1 = document.createElement('ul');

//documents
const documentFolder = document.createElement('li');

// hw
const hwFolder = document.createElement('ul');

//empty container
const emptyFolder = document.createElement('li');

//film
folderFilm.innerHTML = `${folderIcon}${folderFilmTitle}`;
//iron men
filmIron.innerHTML = `${fileIcon}${filmIronMen}`;
//fantasy
folderFantasy.innerHTML = `${folderIcon}${folderFantasyTitle}`;
//lord
filmLord.innerHTML = `${fileIcon}${filmLordOfRing}`;
// new folder
folderNew.innerHTML = `${folderIcon}${newFolder1}`;
// empty folder
emptyFolder1.innerHTML = 'Folder is empty';
// documents
documentFolder.innerHTML = `${folderIcon}${documents}`;
// hw
hwFolder.innerHTML = `${folderIcon}${hw}`;
// empty folder
emptyFolder.innerHTML = 'Folder is empty';

// append nodes
rootNode.appendChild(container);
//film folder
container.appendChild(folderFilm);
//iron men file
container.appendChild(subContainer);
subContainer.appendChild(filmIron);
//fantasy folder
subContainer.after(folderFantasy);
// lord of ring
folderFantasy.appendChild(subSubContainer);
subSubContainer.appendChild(filmLord);
// new folder
subSubContainer.after(folderNew);
// empty folder
folderNew.after(emptyFolder1);
//documents folder
container.appendChild(documentFolder);
// hw
documentFolder.after(hwFolder);
// hw empty
hwFolder.appendChild(emptyFolder);


//classes
filmIron.classList.add('hidden');
folderFantasy.classList.add('hidden');
filmLord.classList.add('hidden');
folderNew.classList.add('hidden');
emptyFolder1.classList.add('hidden');
emptyFolder1.classList.add('textItalic');
hwFolder.classList.add('hidden');
emptyFolder.classList.add('hidden');
emptyFolder.classList.add('textItalic');


// func to display content
function shown(el){
  return el.classList.toggle('shown');
}
folderFilm.addEventListener('click', () => {
  shown(filmIron);
  shown(folderFantasy);
});
folderFantasy.addEventListener('click',() => {
  shown(filmLord);
  shown(folderNew);
});
folderNew.addEventListener('click', () => {
  shown(filmLord);
  shown(folderNew);
  shown(emptyFolder1);
});


documentFolder.addEventListener('click', () => {
  shown(hwFolder);
});
hwFolder.addEventListener('click', () => {
  shown(emptyFolder);
});
