(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{aK7f:function(t,e,a){},gEGz:function(t,e,a){"use strict";var i=a("aK7f");a.n(i).a},iyQ6:function(t,e,a){"use strict";a.r(e);var i=a("IkGV"),s=a("CjXH"),o=(a("ma9I"),a("TeQF"),a("fbCW"),a("2B1R"),a("uFwe")),r=a("VTBJ"),A={computed:{contributors:function(){return this.$static.allContributor.edges.map((function(t){var e=t.node;return Object(r.a)(Object(r.a)({},e),{},{teamMember:!0,position:"Contributor"})})).filter((function(t){var e=t.type,a=t.login;return"Bot"!==e&&"actions-user"!==a}))},teamMembers:function(){return this.$static.allAuthor.edges.map((function(t){return t.node})).filter((function(t){return t.teamMember}))},all:function(){var t,e=this,a=[],i=Object(o.a)(this.contributors);try{var s=function(){var i=t.value;e.teamMembers.find((function(t){t.githubLogin,t.title;return t.id.toLowerCase()===i.title.toLowerCase()}))||a.push(i)};for(i.s();!(t=i.n()).done;)s()}catch(t){i.e(t)}finally{i.f()}return this.teamMembers.concat(a)}}},n=a("KHd+"),c=a("Kw5r"),b=c.a.config.optionMergeStrategies.computed,d={allAuthor:{edges:[{node:{id:"solveddev",path:"/author/solveddev/",title:"solvedDev",position:"Project Lead",image:{type:"image",mimeType:"image/png",src:"/assets/static/icon.3df3210.18a6f12f3c5b833dc44f332f7e01bcd1.png",size:{width:1024,height:1024},sizes:"(max-width: 1024px) 100vw, 1024px",srcset:["/assets/static/icon.1b91758.18a6f12f3c5b833dc44f332f7e01bcd1.png 480w","/assets/static/icon.3df3210.18a6f12f3c5b833dc44f332f7e01bcd1.png 1024w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-118de03aa84a083e19987e4a607deceb'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-118de03aa84a083e19987e4a607deceb)' width='1024' height='1024' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC%2baJAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKeklEQVRo3rVae2xT1xk/tkPpHmppK1ZN7EXFRrdp7QQafUgUyoCkBbqBqmnS/pimTprWQdetpcBWWthEu0LahJBXeT9KEvJOHDuEvP24dhw7tuM4tmM7ThwSgvMiJM3bzr5zTxIc%2b97re21z9enKubF9v9/vO79zfue7RuiQPM5xUIY%2brUdZWpSpiWekU%2bhCM5LaUcXyiH/2x6vjn32GBmVrUWk7kjkeJoCDcvRhFaYqSxNnABAFFiQPyz6eAD6Qo8OVKFX1UAZPjok5%2b7gCkKFTjbjQcc/%2bioFh5MQZAAz9T%2boeSvbndEhqQzJ7fACID0NUhoQIuD9WHV2KokyNOIuElg78WhQs3BIrkrNnLwAAjG%2bg%2bR9S9C5E%2bbI4Uik6oxZlRZM9OkOh06rlocYXyXvyLaxDXzCA96RPH6/enKV57WLzb67o910z/PaqYfdl/daz2nWXmhNAuOmU0JkxIVOzPse0vbz9Dbl9b6VjX6Vjj8y%2bvcy67qsWlKZEXxkjZ88HAAwSdKBoU2q9b2xqfn4%2bML/s8Afm5wIBWffIt882oQxKxJP4DGpltra0c9gfCPjDvhDusZ/qRHktEpk9DgAkAGB/4auZyuDbBIKQAAA4H9F0o1SlhIeOJVCuFOV%2bhYdONxDyhbP0leQOH8rRJ1TY4gBABADeLxf/s1jnHQ6%2bZTAYOO58PbPmsh4GErcY8H/TqVXnda7RyQW%2bw74Kzi/VOVCBUSyLxxCiiyBHb%2bf/MUfPCGCpCCdbenEROBcyQv9BqmvpU%2bHfc7P/PspvEZVbUbwA0EUoE79XrO3iKsLo9Nx60N8ZtTiLi/7VF5u9Y9P4U0z0w/FqQwfKN/ISAP9ZCBfhb/lvXKDCbxxM3llrP7gJMUsRsEJSVEebejjov9EzjPL04vJ2XvQLWchgHShH7xRUOe7im/mZizDtD2y4YUZp6nAMhH7QCaiFjf4pf%2bCXt2yowCTmmb2glVgCK%2b77pVvyDCEVD6EwzzkI61H4KMKjP1X5iaGXg/501wDK1Uuk7XyzFwAAsv/3TfFpJUquySNFYFECHJuLLDSGB0XAeM6o1141DE3NhoMnf/qmZ39U0YYKTSL%2b9AvzQl8oxV82oeS656/ppuYCHEWo6BqGdEVh9KeY%2bjjoP9rWh%2bnnM/cLBgAu6LMGYjYlmWp0sjrddJsxlSVUSWAhT6vIlErohwnq/swcw1pOn53j00%2bUtqLiVmH08wIA2f%2b3FmUvaVGLvqhfe54amJzhKEJD7yj4BWIcaPpV2W39jJjJdPAXgxflGgTTHxkAZP/RLZx6kCglmRT6rPpjjYetCCSnN286IO8VULc09S9yTZNzfkYrBUfz8MSKIiMqaRNMfwQAsEv81024fcguERchteGpLIWbtgPhEBbS8o2DS8VKOK26bPNx6H4vtm5Avx1FEZGEq2DcZ5EivF3n4C7Cn%2bvdKLnxhYLWWT%2bD6MkHq2njgMraUBT0cwGAwfO/erZdIi5CmmJlWkOLb4zRXBAA9pHJhAzNdcdAOM4ojQNfAJD9f2pQBFumQSdrfidrCzeVwSnmdgyOTM%2bx0Z%2b/YBysUdLPDACyPxoqXGZndkaJUurqe0a4p1S269EYh8gAsHArw4XLWoRTNTuKjPPsB4fzi8Y48KrA5wr%2bDRJRugowlLoG2IrARn%2bUxiECANKXFdLewatscu2m680kez4IYjIOywNLX5BwmTFkYHNxoa2PTxGI3F3j009GZxwWQwRnqf3njV3oQfYfVuHFP4r2Dnwkpf6ZC9QIk9MMo3/JOMCe3R5D9rYf1rp362%2bjBeEeqcRNpexoumvYNp9WrruouTfNF8Axax8qMEuiop9w/%2bQtZ5Lu9mu6JQDJiqg7mzQA1RXbXT5DiPx7ZGbux7VuVG4Ty6LJ/hvyjq1a7%2bvNtxMxAOHCDc/%2b5UJLgHPiDy/C2e4RVNouFr4Aiyvsm1Tdu5t7IfskDOB4NcqMvqtM9zfVMrpbIWganQkENio8qEwABkL/zxo9exazpwHE8ECFGP3dMhsb9wGW66QIRX1jqNQmkgkQ7vdr3bvokZP0AEBWDNzDEMrUUP1jbA0vDmDk2EZ5YSBFdHKE%2b1VVzkRauEnLAGTGQr/yT7UuRjNHrmS4B6jBccY3kCJUD4yDlPlk/6jcsVWzINw4ACAd5sfONdlHJthanEPTc4%2bXmH%2bv9XDb1b0wl0cqAmD4VZBw4wAA99hSlYc13RxdhuPtd2Cb%2b0ixWTf8NUeVdCOTkgrHAtMs9D/bsEy4sQKgjbT6B1cM/RMzbE2enomZp6UWVN4ObvlNTedS94ERw1vmO6jEGr6uEeGuqXXtChs5MQEgk0%2bqmavJc6i1F90wJsgdNAajYmCMowj28enHKjsgV1EY94/fdO5sChVuTADwypWmfp6zywBebRV4tTIreDXMa75xj8o9zzmlHrL5UEn7UhFI9ivljleYhBsjANxlyHMOstCPzweMPfQ2d3FIQBHyW2DzztGY6JuaXVPtghkpuAgbWYQbPQAJbRy2lrQxzvGEfuvo5LdKzJD0klXGSApMOxqd3ObilHuILsIC/esbPBGzj0oD6VS19x5Hj%2b0tfTfKN4UoUiS1oRst0t57HEW4P%2bf/aR12eCCG79Zg4SbpIgcSqt19lQ7G0UyybxmZeKTYhOkPcWCAp9C8me4jcTQkL3nvQRFgxeUWbjQA6JVLsyJbq/eNc8wnf2jyhNO/gAEXwVDA0sIILI6ll6nuDaquPfrIg0cYAPrhnOqvjZ0c2WuGxkVFphAhhhRhU42dvJmthqrhiW3aHp708wVAng49dV7nHp1i7JSQC/uoThArxz5LXIGLcKVriNt7H7YPbNH0vB5HDdAP55THdD0c2m30jaFCY8hixFCEotbnqton/QGOIpjvT%2b1s6olbBcjjiWeutQxNMm95yZVdShefbS5uQecZstwD3M28E64hsoTFAUCwcZhlMQ5V/aPgF3htCAFhcetPKq2js36OIljHpuMjYjL6v3NJP0DTD/vA2aCA7EkGsEiBQHl2GUgRPnf4CCNz9M9FgoNg%2bMA2sFUbWQko8vhJp9ZeNYwy9XzInS56BvEvA/h3FgBnieV7UgtYJtYtW2D%2bSPvdLbEDWFgBUho2Vljebe39yNp3wt7/qb3/hK3/Y%2budv5tuJyrdj4J2SyyC%2buMYbaFxdbnlgKnngmfwWvdQrncY4nr38GXPYKbL947R%2b2uFK0nXE7MGsPdUonNq/BAlR49ymumz/sHrPD2e%2b6UCuyOAtqxtZZFxQ439pTrHC7X2F%2bsWgrx%2bpaFjh8K5U9OV1NwbG4AMCn2pBoFClglMIQb6S62oQnCPLUFmf7HeCXNXotKVFBY7lU4MAF7HVAGcfROsTXiCL2wJjQL6XGyOrjf4nKJrd5N3u8K5o7EDh2J5kIuxAoAoakOwfJZa8CgvaV0WcLHMin8TKbwvu7Zuob2TqPUmUp6dEOrOZUF5EqmupCZvDADSKZRrXvzZnYN5HAvszpLsVy/2ZekMeulgSi7S6OcEANlfbUEye0zPTsJDav9mZcc2enJM5G3XhAPIoH/ojjmOMwAxCFcNu8S4ZQ/xf8P/NDReXBYsAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"},teamMember:!0}},{node:{id:"montudor",path:"/author/montudor/",title:"monte",position:"Developer",image:{type:"image",mimeType:"image/jpeg",src:"/assets/static/icon.03a41a4.14b6279430a5e8ffcf50a17b6444e2bb.jpg",size:{width:460,height:460},sizes:"(max-width: 460px) 100vw, 460px",srcset:["/assets/static/icon.03a41a4.14b6279430a5e8ffcf50a17b6444e2bb.jpg 460w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 460 460' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-4b842b518f4ac237093e5be124920dd2'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-4b842b518f4ac237093e5be124920dd2)' width='460' height='460' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAgMAAwEAAAAAAAAAAAAABQcDBAYBAggA/8QAMBAAAgEDAgQEBQQDAQAAAAAAAQIDBAURACEGEjFBExRRYQcicYGRIzJCoSQzYrH/xAAZAQEBAQEBAQAAAAAAAAAAAAAFBAYCAwH/xAAkEQABBAEEAgIDAAAAAAAAAAABAAIDEQQFEiExE0EUIlFhkf/aAAwDAQACEQMRAD8Az/JrgqFBJ2A6k6uPHyqSegGdLniPiM1VRLQpkQHAO3X1GfTT%2bRkNgbZREEDpjQWmN6pGflpSahs4/T6fnRWlhrajdaGVUwDliB10J4E4fNTEXttORWsQqYOFHqTplR/Ce91cXjz3YJN1A6/nQztTlJ4SzdOZXKx7QyJjxY3jJ6Bh1%2bmuQmi72W7WCqehvQE0ZBaOQHI/J1QAUysindcaQxM4TfV3ahysQwjc3pQhNdlTVgRe2pBH7avUC7ViGOlmkCliiMwA74GkpwxRy3fiIoy8zFgxXHUk69CGnz20q66qo6Hiupq7PCrKIyjIWEREqMQxAO%2bPfG50ZqTNzA6%2bkjpz6eW0vQvBloprTQRrEqB2A5mA6nW0p3UKeV8kdteW6D4q3CmEkLUbynk51MLhguDjLHt21aj424rgugR7jURuTgw08AcL9yP70DsI7TwN9J2fEyZBw9USzYVoyGDY6b6Sdjm83xNWJFKGhjjycDY56aKcRXfjC90ddaZP8pZqITLHNShJh8xywKYGMKeo76CfC211EbT1lTy/qwIFGTkbnr%2bP61ZhCpm8qPNvxONLYeCO2vhD7avmHfprkQ47a0KzlWivlie2snxbYKUWmukmgZl8TzEbRpnlZtnDd8Hr99Mbyw9DnUNbblq6Sank/ZKhQ/ca8JQJGFqoiJjeHLMfAiwW0097q6qKAJUReU5JgAXjO7jHYHI/Gr91no%2bG7hFQ3KzU1eIFHlK8uFeSL%2bKucHLL0z3wDpPVq1ttuc9BN4oAYo8YUkE502rJJUHheO22qjpw0a5566ZDv3%2bVeY59BrMuJaaIWqa0Fu4I/QctFarpc6p0kudZCZHKjaNApKRr7DP3OgtrgoDbqGG0lpYFgDySsD/sbcqCQDtvt2zqSpqpbvALfDF4c7wMjkDAUYwT9PTRO12yO20EVLBkIg6lsknudX6ey3%2bQ%2bkbqEtM8Y9qp5ToMKftqQ0yL%2b5FJ/wCTog0A99dfBA3P40uZAhgxT1NxpIFDMxbOBiMc5/A1DR3mnqXkAhqYkVA3iTRcinPYE99KXiniriCjulRQ0tKlOibKUUSsds7kZAOMHHbO%2blveL3db1MVrq6oljHVS2FH0UbaNjGS4Auof0lLHFjH5TX%2bKd0sdXPRtR1sMlxJMckUPzMU65JGwx7%2buvuHeKbTb7csFptc3mv2s0khbm9yTpJwc1NWJLEg/TOw9tNbgKma9yhqOMMFwZQWA5fY6ly4Tu3Ursamt2Epp8F2uua11txlZDcq1T4QYfKo/iMehOqdNdrtEpWvho3dWwxj5lI%2bx99be21FNb6ePzs0UYUbRqwZj9FG%2bhN0mjuFRPLJEFEjcyoygkDtn31xCyZ17DS%2bSQslNuCzst%2bqg4zBFGpzuwY/%2baG018rkpnee40U4Y/K6wcnL7Y5t9FJbXSiqM0aGKoC8vMjHGPpnH41Tr7dJUxssNR4Ui/MZAgbH1GOn314znOj5Jsfqlz8WIel//2Q==' /%3e%3c/svg%3e"},teamMember:!0}},{node:{id:"gamemode-one",path:"/author/gamemode-one/",title:"Gamemode One",position:"Content Creator",image:{type:"image",mimeType:"image/png",src:"/assets/static/icon.dc52710.a3356c160acfe3767fd0f28284067129.png",size:{width:200,height:200},sizes:"(max-width: 200px) 100vw, 200px",srcset:["/assets/static/icon.dc52710.a3356c160acfe3767fd0f28284067129.png 200w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-69461df2a260b624adc2e0f0452ba973'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-69461df2a260b624adc2e0f0452ba973)' width='200' height='200' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAFoklEQVR42u2b308cVRTH%2bQe0wWoB%2bVHYXQoF%2bbXAgqVg09RfabAIbY1GqVJp08SaGPviky/WpMZETY3RPtgiNhTUJvbBN1%2bqSdtQg1p/tLZS2NmlC43tblllf3G/njt3BthlVwbszGy3M8k3d3czc%2bfez5w595xzs1l42IG7WVkWAAuABcACYAGwAFgAVq5mu/kT%2bR9jyLotN%2bZtk808qWNYAYjbZwGt64G2CuPVWm6iBagANpQCF0YA/w1g8how5dNfkxPArQBw9jTQsDYNAPCJm3FcuQTUF9FYSk0G4BkXA4rFgNlZ/RWNivv9foEsoCgNLMDrFgPigzPimI2J9uIvFgD9AaiTbFkXJ9ZSJv/OyBMzaQyMxsOiETB6DXRXJCLu99vPMgBG42S6AFCXGGcBULUGqM6lNkeIPjP%2bW00e8Nd1c5zg%2bCiY7k6wkZaZZx4FXusBXnke2P%2bCLLa/m75T%2b2o3wt9%2bg5nzZxA6%2bx1C577XX2dOY2ZkGOGvjsvj088CNpKZr78P%2bHpwEXy2oL32WAPcJfdAqlgDqfx%2bA/QA3NT6KnPkcTKyVKZLJMgBVKwGhvrEbMNhsdQp7yJ3evy9921rg6c6H16XHd5GmyHyNNgw1WgzCMCX/QIAX38Zk8WYsAFGEHztrfA8lAdvQwm89cWGSHKuxVRDsQkAVNNfBCDXAnCXA1jBK0CT8NK77HU5hP9YhjykKZc9PQBMtG%2bEmyxAqi%2bRn4xm8SfJVw7bvZAcqyDZNYrOHadrfGWr0wPA3x2PYLo2H8EmO4IumzY1OxCsykXwwF4ET32B4MBRBAf7tOnEMUyfHMA/hw8BrmKd44AUAOSVQI3/uzZRWlooQmatA%2bDFDB5jqH2v5KAsVN9IUKMFsM5NYM5CMJ4bKOa4pKhvRn2zzz4WcX1ohmKKqDZRPCJf8%2btPOucCS1jAXAZIAOBcpgXIUSb1/fmRxX2nTTZoAdAPAFMAsP4j86m0EmEmauErl1EWwBZaQCyW8oHHTT6jLIA7wf5PhAVwx8YdaqIy1QJkr91kw60tdZigbNJHwRSPKOO0tQVR99W51SazACiRm99ZBHdlrhxK83xCKE8WjxIjf17KbAABigolnkMkkYfC5cjo5Qy3gEaRPyRLljx1hRYAUwHMeeqhPsVTh%2bLL00pJjG3fLIqT/PyE8nkqMaUNUAIlOVOky3VF5lsAS1EUjTu2NoOVZwO1D4oyuQYxuc2FvyYf47WF8JAkVXVKW51PTvAPEy2AP6WqHEQ/OIjQ5YsI/3AO4R/PKxoW7cgw2IFeoKcTbM9OYM8OTWK91O57FsGONkxuKMP1tkpMtVYoqhRqKUf06hUTAci7Qg7crC2Am5YkT2UOJEXyZ/4bLVfRSV9cqVzrIZ9/8jiwcwvQu50gPi20u1O0L3UAXmk%2b7TYFAHdUyZYqXp7m76nLjqg0JiYUi2re4eXbW/I1J47KPoTRpNmL2%2bK1qx1M2XdkZgK4mcJTe%2bSaXgmiyva4PEilbL6UZFj8msFjYDsSANCTl7XrqTsQgNZDAQACAAKA3V3C5BeKACTdebYAGO0DUgUrKoDxUQEgEtZe1gqFRGwx8KnwAT1JfEA3%2bQBKhlhi30aVxFQANwjAWJKStpsCFe4cZwP%2blRc2Tw2J3ee9tIS%2b3BUvvhJMB1JfS9aha1FUBRDiaSutBNOJIjC8Dbz1BvyHD8H//kHS29r0Hp370bvw73sO/s018D/ZBP8Trng93gh/kr4D/NoP38H0m68DrhIdi6ILIPyXJtZlw803N%2byrlid%2bDd8Y4VFfTUFylWbTuYv7NmRjRO10qRK3T9mq8i5bjvl4IpVM3RrTCMenrggGbYwatzlqAbAAWAC0AuAD8hgkFcBkugCIkiJGq0nc1zQAWmMEvcXM%2br%2bA1hhBb5lqAdafpiwAFoA7Wv8Czu85kFqDTWgAAAAASUVORK5CYII=' /%3e%3c/svg%3e"},teamMember:null}},{node:{id:"joelant05",path:"/author/joelant05/",title:"Joel ant 05",position:"Project Lead",image:{type:"image",mimeType:"image/jpeg",src:"/assets/static/icon.566f69c.fd2c653f7592848b6e70464574b89035.jpg",size:{width:343,height:343},sizes:"(max-width: 343px) 100vw, 343px",srcset:["/assets/static/icon.566f69c.fd2c653f7592848b6e70464574b89035.jpg 343w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 343 343' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-55b289f49f1ef7197ef35f15f86bd558'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-55b289f49f1ef7197ef35f15f86bd558)' width='343' height='343' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAgMBAAMAAAAAAAAAAAAABQYCAwQBAAcI/8QALRAAAgEDAwIEBgIDAAAAAAAAAQIDAAQRBRIhMVETIkFxBiMyYZGxQoGhwfH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APlSugE9KkErRaxEvnHpUlKwswzUjbMq5PSjFrbgREYzhS1SvIlTwkbgvQgIxN2qBBHUUba2JwFAxWWe2IPNWnA2vKveAgE4xVJGKQ2Rx5NE7G22xFyOXOMVnjjyOOtG7ZBFaQkAu7Hyj7k1UO2VooimMzAbWAZs4GO1YVhOoys/iFI48LFkcHnnNF763%2bTHZI4Lt55znnGenuT%2bqOWmnw29isQjjI3AhmrNrUmgMelPHCRvByKF3SjxRF1diFAp0vtO8OEGEOjsAwUDIHvQZ9L3TmckhlXGMetUumzC5eQLEm1h7UIniP1DpTDqASSbw1PlT6vftQy5hOOvlpZEbWMK6%2bIuV9cHGa13FwlnAJ9m5s4jXPAHf81OOELhTgHpzULuya4LRk7YyeuM4PcU0LPh6yl1m6uZZJcMAPMemf8AlP1j8P3T2xkeWIRZ8saHKj880s/BUVrb2t0hnEjSZHIxtxxTzYXm63RUIGBk5rLUuNEtoIrJQuFIHIPr980n6q/hiQADcx6dvvR7UtTxmPt/KkjWbkz3IRSeDlsdqgGpb/J3bcOxJNB9WOwBfU/qiV9eRxjYpctjjBoBMWdizkkmlPYCwQXcYliRWOeFJ8w/urm0x1QyGTbgdAOnvS9p168TK8ZI6YwacdIvkukIuSY5ByJAOfv%2ba0C40UayBrZZELc4IwCe4P8ArpVceqXGnFmjd9i8SQycEfcZpphtLcTKjK6wqC29lzlj/Ijt7Vdd2GU3BVKNyGHIarNRWfWlu4/kvliM4I5HvQ57tI4mBTxJGOTk/uil9p6xMzW6mJu6DH%2bOlBruM7vpJ96MIVKS%2b4kAZPQelZjyea2SxlSeDj2rM6nP0moP/9k=' /%3e%3c/svg%3e"},teamMember:!0}},{node:{id:"7dev7urandom",path:"/author/7dev7urandom/",title:"7dev7urandom",position:"Developer",image:{type:"image",mimeType:"image/png",src:"/assets/static/icon.1e38f94.4f43aa663a6b71aafee0052f3d97f04a.png",size:{width:420,height:420},sizes:"(max-width: 420px) 100vw, 420px",srcset:["/assets/static/icon.1e38f94.4f43aa663a6b71aafee0052f3d97f04a.png 420w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 420 420' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-78ded21fb95a626763099ea6a3ff90c8'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-78ded21fb95a626763099ea6a3ff90c8)' width='420' height='420' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC%2baJAAAACXBIWXMAAAsSAAALEgHS3X78AAAFG0lEQVRo3u2a3U/bVhjGnbZQoAy6iq3bxS4mTZPWtWspLVXpVsoIIQ4hDqxVpfWCTls1ba02aTf7E7ZOpbfTqkm72tUud9NOTXCcEL4SoCPEzgclSSmEQnCchITPeK/DVwjgJI4BM8V6ZB0d28/x77yx/Z5zggQP%2bIbkASQGQOcs/k10/1SA2SAzx4QEK8ow/ACi%2byPJfTPLMH9PjP7kGXroHW7frAeeTWrfcgJcct9j%2b2PMObNDGPj902on/w0AOACIP3uHrgzrlSShIA3JUjo7lK4NpRwFNZKGa/aOr1w9AZpmtos1vz%2bowUYkK0P/VICHXpvCjrdSJi1lTBba26009yq7OKHdPZg99YQWyqgiDffcfYEgH8BO/lqH8boXv%2bFbFZShJhP/VIB2r01ux7WUSUMZOZFGjcPYbDdVtNFHPl4qks8X1i6WNkcbe7q1LoI7Sq0Ko4xK0nA3HUCqf6IJzEE0/dv5zg/%2bitv0yTsB2EMZaqB%2bvYmd/DMFKG8NIx%2bysgtx5CxbeHVB0dUjJoCTQAfMxXUx5H1WdiYOeyhDDdSLBvD6zTBSyR6uWZZdZIvkC4pukQFUg2YILFLFNQF7KEONmADlmgjXPWfjyCm2sGaRi4BbVIABcwkag/DKqrkgQ1klbgTevjtVoo6VfRYp1URP3GIae7sxsSNwTB1FzrOHLi/DHsoiRWBNWrdBO7IhoEo5QThAQtBHdTpr7eP%2b2if9sIcy1GTinwrwwGurt%2bMYZWoG02wEbcCr%2btt0ADz%2b2ue4dnRNz/EM/SUEoLZvUtYAsIWCQWfgVd/US%2bvUuABZpsaHpv08%2bdxu%2bKcmc5EgE%2bVyJoGaTZfMie7/v0un8yOyPEAe4OAP6mekLT4AbtgaDM0zYckqxoT4BvWhIDM4NfFkwqPze59KT//4PZ2TYzt%2biVdylV%2b8ttrhjibSiJKEpKQiCUiivnb1phnUQ7rbYMdbKBOWyGClI25iQcigXjLKdUCTB9gnALWtc9%2bVE0BFW7BENVeKRWEsv9fCosfUseM3w03POmF0LxCgRB5DTrGyc9xUx17rHIucZgtqFlemJzBSGIAqhlSysktxpJrda11ikSq2oC5HADQGPcFNNl1k91rAcJ4tuJYHOOAAgp%2bBbW9oH56BxhhyhpVVxaEzstOFLQDZOlRx76KCT3IDOPE5c7R%2boRidK1ZmJ26ONpmhOl7UMJ%2bdDzoHl7zWEsnpOwD0qoFs1G%2bGS1BrV1lrZHWuvJqLxuEry7WP%2b9U2E9qfpeGgeWWCWiAA5iKyE3SVm9A4jOU3wshHaw9PFQdQT/S1enCNk8jWc2%2bTufUFkesJgOoNgE9xS8uIoZmUeDa67wCCp9dXlQGAMOddXx/Yf4Ac5%2b/hKtu0/88xl4oiNNsBNOAWhVt/32MjpyeFNbG76wNwIRuaJSbHUMqQAIhsAbDWu3S/%2b5xsOBoW2sourg8EEr9And%2b3BrA1Ala5S/ebz7EUikzTtOTWB%2bARmmdC%2bnQAj3yO5VAkQNOSm9zNA0gM4HjivxWQ0skucwxHri4pcMsBAFh5iOE7UKaOIO8l/npymkU%2bYA9VLsv1Vrn7IERARRkwu%2bndHycqbjEnv6DfvE2/0Ua/dSeAdvXKnfpHPkqqADQAhJ/6vfAhR0mDerSj2atPltphqBnW/fqClG4EYkyo69XLb9x9341Y7jmtKfp%2bxPKlq%2bev8ZEFJhwISg9g/TsIN8ejGfFufbcW%2bRhe5Vcp8wBS2/4DFB93V0nu64IAAAAASUVORK5CYII=' /%3e%3c/svg%3e"},teamMember:!0}},{node:{id:"enderzombi102",path:"/author/enderzombi102/",title:"ENDERZOMBI102",position:"Developer",image:{type:"image",mimeType:"image/jpeg",src:"/assets/static/icon.2ef5f76.541ceb744df4f9a2598327cb625ea7dd.jpg",size:{width:168,height:168},sizes:"(max-width: 168px) 100vw, 168px",srcset:["/assets/static/icon.2ef5f76.541ceb744df4f9a2598327cb625ea7dd.jpg 168w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 168 168' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-e0aa5d3bf5f5722c6ab99913d40958dd'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-e0aa5d3bf5f5722c6ab99913d40958dd)' width='168' height='168' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAwQCBQYAAQf/xAAvEAACAgECBQMCBAcAAAAAAAABAgADBBEhBQYSMUETUWFxsQciQoEkQ1Kh4fDx/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAhEQACAgIBBAMAAAAAAAAAAAAAAQIRAwQSEyExQQUicf/aAAwDAQACEQMRAD8A%2bBokOiTq0jCL8QCK1ySVW3XJRjIbL3OiqPvDqk0HIdZPMOQFLj%2bG3CV9Wu%2b3UfA/5JStmGzkeLE5r0ZfoZbHquQ13IdGRu4M8ZJouc0I5rvVixPopp119J0%2bD5Hz76%2b0pnTSGqZbBN5Mam/Yg6QFibGPuvxF7F0kGoape0ZRYGsRmsbQAqrqZpPw8qZuZsj8rsBin%2bb0Ab%2b36vp47zP1iaX8OVQ813BzjhjiHp9RSzHf9P8ASfnyJaPk4vkHWvIT54qKc35I6XUejWd7Q4O3f4%2bn7%2bZQus0fPQrHOmX6ZxzpSgPpKV0OnYjyfn6SgsG0S8l9J3rw/BSxYrYI7YO8VsGxlTqPazGazEqm7RpG2gAMvKspz6VsNiY/cGsalzp/u0u%2bVuMNwy/EzuG8QQPYRjZNOSQOtSde4%2b8SVv7QdNGNXn0P0IjPZ1MwXVu3iHPgnI58ut1/q5dmMcycWt4jlvxPP4glmRa4qSvG0Pp1odh9PvK7AybLsrIA62xwx0ZxoQfb/Elh00PddaVV7EufRinS37j3%2b0bYjeOXJWTi1%2bl2vwDtPeK2HvDWNFrTBuCraMK%2b8QR4ZHgFgrxPNyGpzMay1WbERgT6baHX6yQskiQylWGqnYg%2bYKyjyVA%2bG3WO9zqGGMzFk6zqdSffzG3eADBQANgNgBIs8ExVKibvFrGnO8BY0En/2Q==' /%3e%3c/svg%3e"},teamMember:!0}}]},allContributor:{edges:[{node:{id:"5dd0c62a",type:"",path:null,title:"JustSkitzo",image:"https://robohash.org/JustSkitzo"}},{node:{id:"65916846",type:"User",path:"https://github.com/actions-user",title:"actions-user",image:"https://avatars1.githubusercontent.com/u/65916846?v=4"}},{node:{id:"17687222",type:"User",path:"https://github.com/MisteFr",title:"MisteFr",image:"https://avatars0.githubusercontent.com/u/17687222?v=4"}},{node:{id:"61918937",type:"User",path:"https://github.com/Gekocaretaker",title:"Gekocaretaker",image:"https://avatars1.githubusercontent.com/u/61918937?v=4"}},{node:{id:"6181960",type:"User",path:"https://github.com/destruc7i0n",title:"destruc7i0n",image:"https://avatars2.githubusercontent.com/u/6181960?v=4"}},{node:{id:"13158903",type:"User",path:"https://github.com/codehz",title:"codehz",image:"https://avatars1.githubusercontent.com/u/13158903?v=4"}},{node:{id:"12021069",type:"User",path:"https://github.com/BrandonDyer64",title:"BrandonDyer64",image:"https://avatars2.githubusercontent.com/u/12021069?v=4"}},{node:{id:"33871560",type:"User",path:"https://github.com/Kannoma",title:"Kannoma",image:"https://avatars0.githubusercontent.com/u/33871560?v=4"}},{node:{id:"29150452",type:"User",path:"https://github.com/bsavage81",title:"bsavage81",image:"https://avatars3.githubusercontent.com/u/29150452?v=4"}},{node:{id:"49699333",type:"Bot",path:"https://github.com/apps/dependabot",title:"dependabot[bot]",image:"https://avatars0.githubusercontent.com/in/29110?v=4"}},{node:{id:"28864887",type:"User",path:"https://github.com/montudor",title:"montudor",image:"https://avatars0.githubusercontent.com/u/28864887?v=4"}},{node:{id:"7486865",type:"User",path:"https://github.com/pascal541",title:"pascal541",image:"https://avatars3.githubusercontent.com/u/7486865?v=4"}},{node:{id:"68617589",type:"User",path:"https://github.com/Chikorita-Lover",title:"Chikorita-Lover",image:"https://avatars3.githubusercontent.com/u/68617589?v=4"}},{node:{id:"30197373",type:"User",path:"https://github.com/7dev7urandom",title:"7dev7urandom",image:"https://avatars1.githubusercontent.com/u/30197373?v=4"}},{node:{id:"36399599",type:"User",path:"https://github.com/ENDERZOMBI102",title:"ENDERZOMBI102",image:"https://avatars2.githubusercontent.com/u/36399599?v=4"}},{node:{id:"64587014",type:"User",path:"https://github.com/Joelant05",title:"Joelant05",image:"https://avatars2.githubusercontent.com/u/64587014?v=4"}},{node:{id:"33347616",type:"User",path:"https://github.com/solvedDev",title:"solvedDev",image:"https://avatars0.githubusercontent.com/u/33347616?v=4"}}]}},l=function(t){var e=t.options;e.__staticData?e.__staticData.data=d:(e.__staticData=c.a.observable({data:d}),e.computed=b({$static:function(){return e.__staticData.data}},e.computed))},g=Object(n.a)(A,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-12 mx-12"},[e("h1",{staticClass:"text-center"},[this._v("Contributors")]),e("p",{staticClass:"text-center"},[this._v("\n\t\tbridge. would not be possible without its amazing developers and\n\t\tcontributors!\n\t")]),e("div",{staticClass:"mt-12 -mx-2 flex flex-wrap justify-items-center"},this._l(this.all,(function(t){return e("AuthorTag",{key:t.id,staticClass:"w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4",attrs:{author:t}})})),1)])}),[],!1,null,null,null);"function"==typeof l&&l(g);var m=g.exports,p={components:{Logo:i.a,Team:m,ChevronRightIcon:s.c,DownloadCloudIcon:s.e,ZapIcon:s.o,CodeIcon:s.d,SlidersIcon:s.k,SearchIcon:s.j},metaInfo:function(){var t="The IDE for Minecraft Add-Ons",e="bridge. is a powerful add-on editor designed to speed up your development process. It provides a rich editing experience for all files inside behavior and resource packs (JavaScript, JSON and functions) and provides a powerful work environment. Unleash the full power of add-ons with bridge. plugins and make use of rich auto-completions provided as you navigate through a file. Creating Minecraft add-ons was never more convenient!";return{title:t,meta:[{name:"description",content:e},{key:"og:title",name:"og:title",content:t+" - bridge."},{key:"twitter:title",name:"twitter:title",content:t+" - bridge."},{key:"og:description",name:"og:description",content:e},{key:"twitter:description",name:"twitter:description",content:e}]}}},u=(a("gEGz"),Object(n.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"pt-8 md:pt-16"},[a("div",{staticClass:"flex flex-col items-center"},[a("div",{staticClass:"flex flex-col items-center mb-2 text-ui-primary"},[a("Logo",{attrs:{width:"100px"}}),a("h1",{staticClass:"text-3xl text-6xl font-black tracking-tighter border-none"},[t._v("\n\t\t\t\t\tbridge.\n\t\t\t\t")])],1),a("h2",{staticClass:"text-4xl text-center lg:text-5xl"},[t._v("\n\t\t\t\tThe IDE for Minecraft Add-Ons\n\t\t\t")]),a("p",{staticClass:"text-xl font-medium text-center"},[t._v("\n\t\t\t\tWe strive to provide the best development experience\n\t\t\t\tpossible\n\t\t\t\t"),a("br"),a("g-link",{attrs:{to:"https://github.com/bridge-core/bridge./releases/latest"}},[a("strong",{staticClass:"text-ui-primary"},[t._v("\n\t\t\t\t\t\tTry out bridge. now!\n\t\t\t\t\t")])])],1),a("div",{staticClass:"flex justify-center mt-8 flex-wrap -mx-4"},[a("g-link",{staticClass:"flex items-center px-6 py-4  text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2",attrs:{to:"https://github.com/bridge-core/bridge./releases/latest"}},[t._v("\n\t\t\t\t\tDownload\n\t\t\t\t\t"),a("DownloadCloudIcon",{staticClass:"ml-4",attrs:{size:"1x"}})],1),a("g-link",{staticClass:"flex items-center px-6 py-4 text-2xl font-bold leading-none text-ui-primary border rounded-lg shadow-lg border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2",attrs:{to:"/editor-docs/"}},[t._v("\n\t\t\t\t\tDocumentation\n\t\t\t\t\t"),a("ChevronRightIcon",{staticClass:"ml-4",attrs:{size:"1x"}})],1)],1),a("p",{staticClass:"mt-8 text-center"},[t._v("\n\t\t\t\tOpen Source. Free to use.\n\t\t\t\t"),a("span",{staticClass:"border-b border-dashed border-ui-primary text-ui-primary"},[t._v("\n\t\t\t\t\tStart now\n\t\t\t\t")]),t._v("\n\t\t\t\t!\n\t\t\t")])]),a("div",{staticClass:"pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"}),a("div",{staticClass:"flex flex-wrap justify-center -mx-4"},[a("div",{staticClass:"flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"},[a("ZapIcon",{staticClass:"mb-6 text-ui-primary",attrs:{size:"3x"}}),a("h3",{staticClass:"font-bold tracking-wide uppercase text-ui-primary"},[t._v("\n\t\t\t\t\tIncredibly Fast\n\t\t\t\t")]),a("p",{staticClass:"text-lg text-left"},[t._v("\n\t\t\t\t\tDevelopment with bridge. is simply faster because of its\n\t\t\t\t\t"),a("span",{staticClass:"border-b border-dashed border-ui-primary text-ui-primary"},[t._v("\n\t\t\t\t\t\tcustom syntax and rich auto-completions\n\t\t\t\t\t")])])],1),a("div",{staticClass:"flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"},[a("CodeIcon",{staticClass:"mb-6 text-ui-primary",attrs:{size:"3x"}}),a("g-link",{attrs:{to:"/plugin-docs/"}},[a("h3",{staticClass:"font-bold tracking-wide uppercase text-ui-primary"},[t._v("\n\t\t\t\t\t\tPlugin Support\n\t\t\t\t\t")])]),a("p",{staticClass:"text-lg text-left"},[t._v("\n\t\t\t\t\tCustom components, custom commands, file presets and\n\t\t\t\t\tthemes: You can do\n\t\t\t\t\t"),a("span",{staticClass:"border-b border-dashed border-ui-primary text-ui-primary"},[t._v("\n\t\t\t\t\t\talmost anything with plugins for bridge.\n\t\t\t\t\t")])])],1),a("div",{staticClass:"flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"},[a("SlidersIcon",{staticClass:"mb-6 text-ui-primary",attrs:{size:"3x"}}),a("h3",{staticClass:"font-bold tracking-wide uppercase text-ui-primary"},[t._v("\n\t\t\t\t\tSeamless Integration\n\t\t\t\t")]),a("p",{staticClass:"text-lg text-left"},[t._v("\n\t\t\t\t\tbridge.\n\t\t\t\t\t"),a("span",{staticClass:"border-b border-dashed border-ui-primary text-ui-primary"},[t._v("\n\t\t\t\t\t\tinteracts seamlessly with Minecraft\n\t\t\t\t\t")]),t._v("\n\t\t\t\t\tand loads behavior packs and the corresponding resource\n\t\t\t\t\tpack from the com.mojang folder automatically\n\t\t\t\t")])],1)]),a("div",{staticClass:"pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"}),a("Team"),a("div",{staticClass:"pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"}),a("div",{staticClass:"text-center"},[a("h1",[t._v("Getting Inspired")]),a("p",[t._v("\n\t\t\t\tbridge. has been used to create various awesome projects.\n\t\t\t")]),a("div",{staticClass:"flex justify-center mt-8 flex-wrap -mx-4"},[a("g-link",{staticClass:"flex items-center px-6 py-2 text-2xl font-bold leading-none text-ui-primary border rounded-lg shadow-lg border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2",attrs:{to:"/creations/"}},[t._v("\n\t\t\t\t\tTake a Peek\n\t\t\t\t\t"),a("ChevronRightIcon",{staticClass:"ml-4",attrs:{size:"1x"}})],1)],1)])],1)])}),[],!1,null,null,null));e.default=u.exports}}]);