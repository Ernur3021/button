
{

    // let c = add(554,87, '+'); 
    // function add(a,b, operation){
    //     if(operation == '+'){
    //         return a + b
    //     } else if(operation == '--'){
    //         return a - b 
    //     } else if(operation == '*'){
    //         return a * b
    //     } else if(operation == '/') {
    //         return a / b
    //     }
    // }
    // console.log(c);
}
{
    // function fibonacci(n) {
    //     if(n == 0) return 0
    //     if(n == 1) return 1
    //     return fibonacci (n-1) + fibonacci (n-2)
    // }

    // console.log(fibonacci(8));
}

{
    // function power(a ,b ) {
    //     if(b == 1) return a 
    //     return a * power(a, b -1)
    // }
    // console.log(power(3,7));
}

{ 
    // let a1 = arr1.map(function (item) {
    //     console.log(item)
    //     return item * 2
    // })
}

{

    // const articles = [
    //     {
    //       id:0,
    //       name: 'Article 1',
    //       text: 'This is article 1. We will do bla-bla',
    //       authors: ['Tlemissova', 'Aubakirova'],
    //       citations: [
    //         {
    //           journal: 'BioScience',
    //           edition: '1.0',
    //           pages: [3,67]
    //         },
    //         {
    //           journal: 'ChemScience',
    //           edition: '3.5',
    //           pages: [11]
    //         }
    //       ]
          
    //     },
    //     {
    //       id:1,
    //       name: 'Article 2',
    //       text: 'This is article 2. We will do bla-bla-HA',
    //       authors: ['Kuraev', 'Poskii'],
    //       citations: [
    //         {
    //           journal: 'World of Tech',
    //           edition: '1.1',
    //           pages: [6,8,99]
    //         },
    //       ]
    //     },
    //     {
    //       id:3,
    //       name: 'Article 3',
    //       text: 'This is article 3. We will do bla-bla-HA',
    //       authors: ['Zetsev', 'Abramov'],
    //       citations: [
    //         {
    //           journal: 'World of You',
    //           edition: '1.1',
    //           pages: [6,8,99]
    //         },
    //       ]
    //     }
    //   ]
      
    //   function changeArticleText(id, newText) {
    //     // Поменять текст
    //   }
      
    //   function addCitation (id, journal, pages) {
    //     // Добавить страницу в citations
    //         articles.map(function(item){
    //             if(id == item.id) {
    //                 item.citations.map(function(a1) {
    //                     if(journal == a1.journal){
    //                         a1.pages= [...a1.pages, ...pages]
    //                     }
    //                 })
    //             }
    //         })
    //   }
    //   addCitation(3, 'World of You', [10,15])
    //   console.log(articles[2].citations)


    //   function getAuthors(id) {
    //     // Распечатать всех авторов в алфавитном порядке


    //   }
      
    //   function getArticle() {
    //     // Выдать случайный артикл
    //   }

    //   function getArticleFromAuthor(author) {
    //     // Вернуть статью по имени автора
    //     articles.forEach(article => {
    //         article.authors.forEach(articleAuthor => {
    //             if(author == articleAuthor) {
    //                 console.log(article)
    //             }
    //         })
    //     })
    //   }
    //   getArticleFromAuthor('Zetsev')
}


// 1) Найдите являются ли два слова анаграммами 
// anagram('cat', 'tac') => true
// 2) Даны две строки, верните true если второе слово содержит в себе первое
// substr('javascript','java') => true
// 3) Дан массив из чисел, замените все повторяющиеся числа на _
// clons([1,1,2,2]) => [1,_,2_]


function steroScript(word1, word2){
    if(word2.length > word1.length || word1 == '') return false 
    let answer = false 
    for(let i = 0; i < word1.length; i++){
        if(word1[i] == word2[0] && !answer){
            for(let y = 0, z = i; y < word2.length; y++, z++){
                answer = true;
                if(word1[z] != word2[y]) {
                    answer = false; 
                    break;
                }
            }
        }
    }
    return answer
}
console.log(steroScript('javascript', 'java'))

// function clones(arr) {
//     let map = new Map();
//     for(let i = 0; i < arr.length; i++) {
//         if(map.has(arr[i]) ) arr[i] = '_';
//         else {
//             map.set(arr[i], 0);
//         }
//     }
//     console.log(arr);
// }

// clones([1,1,2,3,3,4,5])

