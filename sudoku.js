//Création de la fonction "Vérifier() qui s'assure que tous les chiffres de la grille appartiennent à l'intervalle [1;9]"
function verifier ()
{
    //Récupérer toutes les class "case"
    const listCases = document.querySelectorAll('.case');

    //Enlever toutes les classes invalides
    for (const input of listCases)
    {
        input.classList.remove('invalide');
    }

    //Pour chacune de ces cases
    for( const input of listCases)
    {
        //Vérifier que le champs est valide
        const validite = input.checkValidity();
        
        //Si un chiffre sort de l'intervalle, on arrête tout
        if(validite === false)
        {
            return
        }
    }

    const sudoku =[];

    //Récupérer tous les chiffres
    for(let ligne = 0; ligne<9; ligne++)
    {
        const sudokuLigne = []
        for(let col = 0; col<9; col++)
        {
            const identifiant = 'case' +ligne+ '-'+col;
            const input = document.getElementById(identifiant);
            const valeur = input.value;
            let nombre
            //Si valeur est un champ text vide
            if(valeur === "")
            {
                nombre="";
            }
            else
            {
                nombre = parseInt(valeur, 10);
            }

            //Ajouter la valeur à la ligne
            sudokuLigne.push(nombre);
        }

        //Ajouter la ligne au sudoku
        sudoku.push(sudokuLigne);
    }
    //Vérifier qu'il n'y ait pas de doublon dans les lignes

    //Parcourir la ligne
    for(let ligne = 0; ligne<9; ligne++)
    {
        const liste = new Set();
        
        // Parcourir les éléments de la ligne
        for(let col = 0; col<9; col++)
        {
            const valeur = sudoku[ligne][col];
            
            //Si la valeur est vide, ne rien faire
            if(valeur === "")
            {

            }
            //sinon
            else 
            {
                const valeurExiste = liste.has(valeur)
                // Vérifier que l'élément n'est pas dans la liste
                if(valeurExiste)
                {
                    console.log('Erreur doublon ' + ligne +'-'+ col);

                    //Ajouter une classe d'erreur au champ
                    const input = document.getElementById('case' +ligne+ '-'+col)
                    input.classList.add('invalide');
                    input.addEventListener('input', function(){
                        input.classList.remove('invalide');
                    }, {once: true});
                }
                else // Ajouter l'élément à la liste
                {
                    liste.add(valeur);
                }
            }
        }
    }

    for(let col = 0; col<9; col++)
    {
        const liste = new Set();
        
        // Parcourir les éléments de la ligne
        for(let ligne = 0; ligne<9; ligne++)
        {
            const valeur = sudoku[ligne][col];
            
            //Si la valeur est vide, ne rien faire
            if(valeur === "")
            {

            }
            //sinon
            else 
            {
                const valeurExiste = liste.has(valeur)
                // Vérifier que l'élément n'est pas dans la liste
                if(valeurExiste)
                {
                    console.log('Erreur doublon ' + ligne +'-'+ col);

                    //Ajouter une classe d'erreur au champ
                    const input = document.getElementById('case' +ligne+ '-'+col)
                    input.classList.add('invalide');
                    input.addEventListener('input', function(){
                        input.classList.remove('invalide');
                    }, {once: true});
                }
                else // Ajouter l'élément à la liste
                {
                    liste.add(valeur);
                }
            }
        }
    }
    // indices des carrés
    const carres = [
        [
            [0,0], [0,1], [0,2],
            [1,0], [1,1], [1,2],
            [2,0], [2,1], [2,2],
        ],
        [
            [0,3], [0,4], [0,5],
            [1,3], [1,4], [1,5],
            [2,3], [2,4], [2,5], 
        ],
        [
            [0,6], [0,7], [0,8],
            [1,6], [1,7], [1,8],
            [2,6], [2,7], [2,8], 
        ],
        [
            [3,0], [3,1], [3,2],
            [4,0], [4,1], [4,2],
            [5,0], [5,1], [5,2], 
        ],
        [
            [3,3], [3,4], [3,5],
            [4,3], [4,4], [4,5],
            [5,3], [5,4], [5,5], 
        ],
        [
            [3,6], [3,7], [3,8],
            [4,6], [4,7], [4,8],
            [5,6], [5,7], [5,8], 
        ],
        [
            [6,0], [6,1], [6,2],
            [7,0], [7,1], [7,2],
            [8,0], [8,1], [8,2],
        ],
        [
            [6,3], [6,4], [6,5],
            [7,3], [7,4], [7,5],
            [8,3], [8,4], [8,5], 
        ],
        [
            [6,6], [6,7], [6,8],
            [7,6], [7,7], [7,8],
            [8,6], [8,7], [8,8], 
        ],
    ]
    //Parcourir les carrés
    for(const carre of carres)
    {
        const liste = new Set();
        //Pour chaque carré
        for(const element of carre)
        {
            const ligne = element[0];
            const col = element[1];

            const valeur = sudoku[ligne][col];
            
            //Si la valeur est vide, ne rien faire
            if(valeur === "")
            {

            }
            //sinon
            else 
            {
                const valeurExiste = liste.has(valeur)
                // Vérifier que l'élément n'est pas dans la liste
                if(valeurExiste)
                {
                    console.log('Erreur doublon ' + ligne +'-'+ col);

                    //Ajouter une classe d'erreur au champ
                    const input = document.getElementById('case' +ligne+ '-'+col)
                    input.classList.add('invalide');
                    input.addEventListener('input', function(){
                        input.classList.remove('invalide');
                    }, {once: true});
                }
                else // Ajouter l'élément à la liste
                {
                    liste.add(valeur);
                }
            }
        }
    }

    //Utiliser les indices pour vérifier les doublons

}
//Récupérer le bouton "Vérifier"
const btn_verifier = document.getElementById('verifier');

//Assigner l'evenement 'click' a la fonction 'verifier'
btn_verifier.addEventListener('click', verifier);
