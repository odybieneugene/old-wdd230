
        const input = document.getElementById('chapterInput');
        const addButton = document.getElementById('addChapter');
        const chapterList = document.getElementById('chapterList');

        addButton.addEventListener('click', () => {
            if (input.value !== '') {
                const li = document.createElement('li');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = '❌';

                li.textContent = input.value;
                li.appendChild(deleteButton);
                chapterList.appendChild(li);

                deleteButton.addEventListener('click', () => {
                    chapterList.removeChild(li);
                });

                input.value = '';
                input.focus();
            } else {
                // You can provide a message to the user here
                input.focus();
            }
        });