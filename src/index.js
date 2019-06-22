import './index.css';
import { getUsers, deleteUser } from './api/userApi';
// import { link } from 'fs';

getUsers().then(result => {
  let usersBody = '';

  result.forEach(users => {
    usersBody += `<tr>
      <td><a href="#" data-id="${users.id}" class="deleteUser">Delete</a></td>
      <td>${users.id}</td>
      <td>${users.firstName}</td>
      <td>${users.lastName}</td>
      <td>${users.email}</td>
    </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function(e) {
      const element = e.target;
      e.preventDefault();
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
