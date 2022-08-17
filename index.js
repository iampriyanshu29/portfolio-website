
// Navbar Opening and closing ------------------------------------------------------------------------------------------------------------------------

    const  closeBtn = document.querySelector('#close-btn');
    const menuBtn = document.querySelector('#menu-btn');
    const menu = document.querySelector('nav .container ul');



    menuBtn.addEventListener('click' , () =>
        {
            closeBtn.style.display = 'inline-block ';
            menuBtn.style.display = 'none';
            menu.style.display ='block'
        }
        )

    closeBtn.addEventListener('click' ,()=>
        {
            menu.style.display = 'none';
            menuBtn.style.display = 'inline-block';
            closeBtn.style.display = 'none';
        }
        )

//  ------------------------------------------------------------------------ --------------------------------------------------------------------------------------------

// Show more content Section --------------------------- --------------------------------------------------------------------------------------------


    const readMoreBtn = document.querySelector('.read-more')
    const readMoreContent = document.querySelector('.read-more-content')

    readMoreBtn.addEventListener('click', () =>
        {
            readMoreContent.classList.toggle('show-content');
            if(readMoreContent.classList.contains('show-content'))
                {
                    readMoreBtn.textContent = "Show-Less";
                }
            else
                {
                readMoreBtn.textContent = "Show-More"; 
                }
        }

    )


//  --------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------



// Qualification Tab ---- ----------------------------------------------------------------------------------------------------------------------------------------------------------

    const tabs =document.querySelectorAll('[data-target]')
    const tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => 
        {
            tab.addEventListener('click', () =>
            {
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tabContent => 
                    {
                        tabContent.classList.remove('qualification-active')
                    })
                    target.classList.add('qualification-active')

                    tab.forEach(tab =>
                        {
                            tab.classList.remove('qualification-active')
                        })

                        tab.classList.add('qualification-active')
            })
        })
//  -------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------

