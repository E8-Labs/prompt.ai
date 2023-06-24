



var comment ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHoSURBVHgBlVRbbtNAFD0zYyIkQEpXgFkBXgBq4hUQVkB2UCo1lfiK+UI0RSUrqL2CsoOkZgGEFeAl5AN+2oyn53qSum6tNjlSHHvm3jPnvgZ4CrOkW/2egGpdzU8HfB5wOwLcmkQt+b4Aygz7x+njRLOTCMZcwIHONkOp53Qs/KYOoR0P0L3Ky17FiD8XD4nybzQKzuEcCf4liJMlWkP9SsIggVIfoTHEu6OsJpJN0/kNV07RGyXYBpcTITuALanseKG96mcXjP/n1iQCsXXIYPSZfAb4NelzIYK9/oBdUZoExv7FbNJXyL8zL+UeTxjcGuQnQzgVtjorLLE/+oE6xJQhugDKscTIGsZOR3R42y4DUoSaSEllMQ58WDhsmPaOPmFrOCEOg+oE48LGnnRy8CJq9Vutirv9w4iWTAOEaFGFchfmpTRlv5VId0TBXi2IETksmOwJw1BjWPMG8WF7Ez6G/HTGZ6Fhg9SrWA2xK6SRQeXWZbpWsZmpHWA6oiZFPJoHa9YurCq2JpBimFdnzA3Pv/4iS0z2cyqyZFd9dnm3Sh70a073tFGdDapJ0OeepL4B/ND6ARxX76wAl7vrnTmt/3gGkjsMWO6Q/9P7N4RqyBVsNmVMoN/TKfTEcqm5S9j/adsVcwMeYLvD3SJJ3wAAAABJRU5ErkJggg==';
var uparrow ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB9SURBVHgBfY4hDoVADESnm3w0R+AfgQSDA4PmpqAx4FCEK8ANVq/YZRYIKYYmTdqZl2kFutYqhf+1CGJRDL22REEZfDJySm/Fwrka5bTFxbwgoWncH8bk55xQm+mdiRoSJuSTfd4I1AMvMFmwNB2h7AXpnyPssV9L7K+ifwBIvzBlLQifsAAAAABJRU5ErkJggg==';
var chatgpt ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOgSURBVHgBjVZLUhtJEH3VLZjVxOgGAycws54IfU4w4gQ0J5AUNkzMStJqwkYKiRNInMBwArWFvTY+geUbdAQbG1xVfplVEpJABBnR0b/qfJkv82W1wXM2/X8P6W6TVxngy4ApeL4B3AUqpxO8wMzWNx/7R3BmpI69mcP4nE/3eNT0vccNSu4YiS3w/UeBerd4OcDsbQNI36tjRyf1k3wtq9IO3+Fgw9UcsL3NzJInAVAa6snd1decX5/VkO6M1bkXunAJ73vhrO7GmA3Ga57WI3+XcdER89/j3QT1/+Yh6m4Z6e9DOsv03uMc7ra7Rst0WCZdXVLZJEiByuu25rU9bXuIyr+XuO43GW03FBk5rGujfnqjSz69O8Df8XoZZH8KqZP1mn3IIN2dMro9jQyOsEkTNilitA0eBZw/XNI1peM0GcLS0WwwX+PekrLU1JCYhgSUBFrEOV9U37RCK26YoQNxLlTNBkM6/8ync/3mgfuvykQIoiA3r2INhHMp6M8JtplJ/sD1oENnrUjVJSpvjiO9EyQlco8jNsBXAk0QUBEBtK/zZUGfMo8RD2rBsWN8AZ92NOIHajICdSNQFr+aLwA2o52vRsAPKDRG7G6PV7pmgg/9EdeSGgrS3h/HADPMzlh0I23eYGe1kyCQTdHQUlcO0Rue3dUjpRoj3cNs/LdIzVhrUDkR9UuLsm1/thJ4zhW5mZ219EObiHguVMkqGl/GVmNDVE8yXhxyXYa01NDHCiKFTo4SuNJIRwJMRzuq3g4f2ft9Ah0oONJXa36lm4Aqnc4Djl+09GowuXRnSR1+6F/xQTO2WxX2rhc5/UtBQ1EbWlQpso4SVXuO7aZgocixZ5Ua6YJ0h8UajAh0HrtkwmK+1wB0BrlzruPZ/PMMgGSfJxEgpKbUUOJKmW+pwqU2YYA1FMjd7nNdl2DFVteiGc3AXYQMnP/CrjjAlNMyKHF/SY2RluNeEGdLcMB14FCTEbJqIkhRumdwEmT1dBIBGFkqSjSdJa8LamTuLIab7nA6rmtKlQpv1XzoRNmM3N1hIGdhyrHQwF3MJj0t/sLCuO4sHciosPftpfpDO2chuPXt9AFA5nlqBaQWxZdTI99I0Z+8bzyMa997tMOlu5+VrurrfWzY4y1Tuee4No/Una+MhGBSC5+MQ8tya33iR2D7pq9i+k1ERsnTiQIu/ipkVPN+GQRHQ1AvXg7wVGYy2j27zcQ/DdgrODt6bhL/AtG8zFN/qzPDAAAAAElFTkSuQmCC';
var submit_button ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHmSURBVHgBpVVRTttAEH3rNVWl/rgnaHqC+gSJfQLoCQonaKOSSv1K+lUpBDU9QekJCiewCUL9DTcwNzAS/ADe5c0uBBIwhvAkeye7M89vZ2cnCk9FNogQvolhEQPqA2dafErA7KH9befGTT0Y/P9nCxcrDLQMUh1YFUOJfQ2rCv4uOLb8vBqj/bU7T5iRRL/6TGudEdFCcE7jCBVtnOZIB+VsfX9rAKX6XO+i3Rt7wmwYQ+uM2+En7K4PxhQ4m84F12EyyviO0d58G3pl+h/JSpjzFOn3As+G+ksRCQ5H70KSJS5X5uL9cmQCE7nsneuTAAhWqW66PJlT2PEc3ZKEiPBSKCkheyxmQOYjN5H9Wo5Y4lxtyiEKoZFTpUpt+lgG4WXsRoPcE6a9nF/4TclfMNn+g8Ohd5BRKqAJXh1xWcj7trBnBbqACh+Rbu7WEooI2DWpQa/wBp3eABVLB2YD1v7grdiA3NUACR6DsrP8CcK5RV86O852212J3J19DLJllzKPoN7zdfOVy67zraq8mZBFSs+Cz2qtj9af3FiZaTOhg5GtJDjYvn9YB1uJqwxJ0Z1bptCE/dGYXtLWchLsUQOVW1G95lrbQkNpJhRMhuuwuj9rslaVTr05Gz+pvdVC/gYaiv0KC5+7W+zsdscAAAAASUVORK5CYII=';
var user_suggestion ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF3SURBVHgBvVWBcYQgEDxnvgA7CB2EDmIJdhBTQb6DNx18B6aD2IGmAu1AO/A7IHf5Jc8TBCfOZGd2hONYjoNDov+GMSZnHpkdczE3LLBVTLU2PwsJ8ueVeWRKe2R+Mi9wEdsTU6NfZ1n2RokoFXNAZA1TJ3zf4TutRg/HCVstaCPYt8ScsDgiXWJRRsS1zb0/UGFLFf0ROOh7DWyjo53AbRlsp9gSLa6fchnwsTsvpFOjkyeEB/MbTWBxQX3g/iNz5Lt4oThe6HZ3LVq3IxosOnPzQYQl0pSoTJJCGSmNmakOEFX+KFKTJxabVwdRPUvAHsppNMeYJzhLxD3zWU6SI+gdn1BOfbSeaPVjd0+SdgL1MLmG73SYyDO4QVSFKk9BeKAdgMbZN9qqaVLFEhH+CAbnVKHkSidE7B+mRDs3sTfHXN+OCQt02Il2xOSJPJn735WLUnyzSEQVf04UKB6gp+uVlPHC2uyVXRV2FtCYbFMzM9vU2/IF0yEFdab8JMIAAAAASUVORK5CYII=';
var star_2 ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHKSURBVHgBnVTLTcNAEH0z+VwA4xNnUwGhg1BCFHHgBhWQDggVBCqIb0iEXwe4A0IH6QAUQAoO8TC79pqfQUuetNrVzM7zm9nxAB6QYRia5XOX/iQ6X2mhzgMItfPbkuB1fkB7s8m/CeUsjNDM7vT4qOu0MB/qCpGm27+R1n8jVLIjG8wa3MmD5Tq8QaYfaTR7wKwHX8hotS2Xgcjl2vCH7yKI1fegvv2q2DJluQ6OkGHfqjJLMEYt7Th1H/f0cTJbigimHIIJaoipMz0tCZVsoGQ9iBad9ALonrrTE/yVhVEo1NLTFsg8msTUfTr4lF7Qx5KQUdC3HMrFALet1O60j2VR5yIbVkK2bQHfxq3EDGUsa4HH9hQsBlgCVkjeYqo0jXOjq8HV2i3+CY0bVr6BGnqusN5k7kFHQdnkXHqZ4+LQgje4bbdnF/uZcD6Pcos8wluiTOy+MVtHhcLI7ovaGL5o1BK7vzR2fhJKoYwX0fc4M8Yqa5stchsVSvFtfMlVcKf/pvaUHIPnCbKGBpBpJ9dnk9L3Vo80Kzs89KfYdBxfxxdxB5Jp69AQWdMpT+DmIRnywsfFBzjd+UKBCtj0hCKTCu0+J74+g3dStdXUpfas/wAAAABJRU5ErkJggg==';
var saved ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEqSURBVHgB7VPbTcNQDD3XqfoDre4I7QbpBs0G2aDqLyqPDWCDVHwgftkAJoAN6Aa9TECEhBS1IeY4alBUVVD6XUtOfB0f29E9x2HL/JX6ooBv54p7F7brXBOcnGksETLnMMYOU8XLeo1p00Ts0ZtpGnXwyjBUFZLVCsO2W44N37pdLE9nOv6Z2L/UJRQPH7fuBr9Y/0LnfE1EMBSbRpD/C1SvJ6hryhKxcIUB5wbsYfnc5azPxRFIkNcKOfY0/m8wjOBAOwIPARrZzf8FJLWueV/v5hbvqumQ9YFsmDRTKkVGCqYbYg/oWe9c4yjCdMMcX2NMTqYMHh6dICYIVETSyIfNBmz2bHnWLAhMTTHyeecWXyVGrMlNISTyqC1cTgnkZsLwyY62iX3/BoOGhsA8hmO+AAAAAElFTkSuQmCC'
var purchased ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFqSURBVHgBrVRLTsMwEH3jhIgdOUJvQAtiwYog1IodvUHVE9Ab0CNwhPYEtEsQEmaFBC3tDVpOgNlVVWIzdtKfAou2edLEzng88+bZMjCKQhQIgSR4wUetjYIgIIyChxsUBGZo+jAoF9W6zzZ2M3PwgGF1im0hSCHGD+J5B+dySs45rH1nywrbI8xMcbeXvnORYZYU4uSpgl0wui5B6wmI6sI5EnrdT8dZ1hmpNCG0dEPsl7ELEi/KJuM0oR+nB8OUsRNE5IazZ5lqWJEKn1UJwnEu9i0q5XyHfAB2zxJ0AWOkS730OR0p2tBxcFVHEExyptkWcSMuSKy/EX3X7HKzMT2udIc4aPFf2/m8REKLZo6hoTWGQcMNMfUc143AQa3DngbzbmM279qLiv/gGAa30LY4dXD62MwntEFJcO+SrqCQv/ClFVt04c1bC8b0Z/X3apkve8QSh/x4WK2ONtY1ffHHJhjbk11f+gXVwH9cXjMFpAAAAABJRU5ErkJggg=='
var created ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVTLUcNADNXay5ADJFsB41QAJTgVQAlQAaSCtAAVQAl0kFABdBAnKSA7cAnY8fKef+PZsUMO6JCVlNWT9LSyEk+MW5odDi06kg5xouyJpIlVY9v2qxZAtJfwGY5YjhAnskhlf7dT46QBIkgu4ZwqrjyVp7qHPs0l//AyGyVBDO2a9o/sJzWYnLv1fOjWywEAaQ/d6gG2q+0uYXLc2TK2dhgGIfixdWHZXDggjGEsMYJUJCrduR26zQwtvtNi/38BuartnZyOtBJtCuoknPH0SaScuU2cSZa0fSWQThR/5XusW+5pIPmLP1ZKKA7TDBd4Fr1VNkCczmcHyLGi+/5gOwEqKWoFjxj7DYiNYVlUPvEr1/0ZsgQPdEGdIDgs+YO+6mq/F8iWxBacjFBJDpAvddHLUcDMZdYw6ruEWVpMZ+X74TNVNZYV2cp51Zutg5MqJq62LCkc1YpsD62EL/4G+EtLeQWpb/xcdAGgCk7wEuotu6mX9n8/I17JJi3fjekCyMDHAJX4nP0Ci97cAJTn0NEAAAAASUVORK5CYII=';
var downarrow ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgBZY7LDYNADESfd6OcKSElpAU6SRWRckpyisQtFYGogBIogTOSWWw+AsGcrJnnsYW6eEB8o31O/mrZq/zdiNcS9BtQrSBlk+HBEUo2GyOzWdyJwTalm5pdM5QxqF16NrI17GAM8KYF8lhOP4XLB5GEDv8Vco0p3y+R2xOfLwAAAABJRU5ErkJggg==';
var prompt_history ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgBrVWBVYMwEL30OQCdoGxgNzBu4Aa6gWyATlA2ECdAJ9BOUDcAJ2idIN6HSxtjIJTy3/uPclz+XS53qaIBGGMSfmjmmrkS8zfzi/mplDrQOWDBlPnC3JsTaqEL+KRjRR9FECyYOuCjmaUTII+J5uJYSRnG7KwcFHdEn+hMYI2szUKR25rRRMgu939qLodQm7EHERZORPjDz3ZDF8IpSYKXB3lJI4tyZOMx83xsktmCugE4cLM3kYSWAVvjvogGhuZa2Zqw8ZZmAOvtIL6g+dGO+RV1s38TiIyG1xGRd95p4dlwr2yRMS6UNDBpS4qj8ZKBKHTe7Nz/n5oJkHk4dZi0zo4ugAzIcR7s4T0z13NkzfjxI9pb6p4mArs+jrRjTORD/xUYF66CJRVxm3mNce8RgN/G8aucg2vbT/UshCCyTqlreLRkI59h0/K7pK69bJu9cl9nvcJOgDt+gCsRJAmwZRZDf6a/T7On/NJGR7sAAAAASUVORK5CYII=';
var down_red_arrow ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgBfc7LDUBAEAbgf3aduGxUoAQlcJM4KUEHOqIDLhI3SlGB7Mltjd0IQsIme5iZbx5glSj8PFd3X0AGLYd5/YUgghHkNwLGlGAkb3whhgJvFR3JLAJJ24mJlr58IpOSHma6J1z4uJkxW1Q45EJ6rrMYXgy5KZi1Iz3ps7YDVhwy76KgCFsAAAAASUVORK5CYII=';
var flag ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACGSURBVHgB7ZLhDUAwEIXfiT3YwAiYwAiYgBVsYhOMYAJMUq9JJf3bVvjTL3m9XpN7ueZOYFBKVQwt3NhEZNYXMSYDw0hNcKOiMprVTzcHlcMD1i36N4nJc7qe8OPS9QleIhp9Y1RQZ/pk3IUO7jT64OqsqfVYwp2d6mF1oxBIHP8PRisCuQF2KCXGtvcRUwAAAABJRU5ErkJggg==';
var trashbin ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAATCAYAAACZZ43PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF6SURBVHgBpVTRTcMwEH22U76zAdmAsgA0I3QC6AiVAIkv+odUKhUmQExAO0FKUb8pG4QN8t3WPs5OS0idkkiclNh6tp/v3t0Z+KeJSjQZtqHkmGedLTKBXvcR36b7W6V/+D6CUgnPMmh0oSl2uDpK3NqeBR6Baj0DNMHZVe8XOsN8lPDaHc97f3tg3db04sOCMdHxUCw43o16LRCK+JeBOITyzpA9C0EizQHKYNbdAKtWCrV54gMhjEwP6bpjycM0IbTMClHfHgb8TdDU3kcfmA8v7TTXQPDNQp40JiBE0Hko8ice2NgbWDJmLZweWUGg10s3LkbHtQTBpu3G+GZZEORicOHo01oCEnz7LhOlOuDUQUb1BMQeUFpBQEtmj2oJhLBipz4B4YvTXJ8JwRkAffoEhmwddLYqV5ttJkKbS33mE8TXFpxxlY0PErhG4z3bDFgrd6M2fX4HEu48q/S0fJounEZmFZcjqnJTBgN27ry8oKcw+nH/UfkGUm2DRBIFKwkAAAAASUVORK5CYII='
var extension_logo ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgB1VbtUcMwDFU4/pMNCBMAG3iEbkBG6AjeIO0EGaFskDBB2SBlgpQJzNNZBsVnUvu4/uDdvfOnJEd+cktUAOdcB9oSm1sqwxMV4oaujKsHWAXybcADOAln58H9IziALZUCRrUYO3HaC2dx3qvATvp1SYBeDLfR/CYxtw1Bcp0bMbCUCd4rNiZn845TQQWQlHL6dvFaqg4ewfeEE66BFxnuq6o6hTX0z1jncZMTIHXCBs2gplrMPesgwBm8Sxl3SoZailbtCTluhAsBiA8t4UDLX/AGaoltwJOcSJ9Or1G0zj5aWRsTdosvGpjRXK00zzjm2DFSd8BRF48aXyKahyBDjMeEHWfhgy5B5Tu7MtW92JzNQdN5leltDkEEuQbf5S/6D/NdpC7jft4sSyWQIJO62CmSYujPLnqfNKoLQRo0hnyF3pOXKV/4CH6Sr/hXEcHf8ZsU1/D/fzJL/1XsKfFiruELKezC4Lzpks0AAAAASUVORK5CYII=';
var extension_status ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAATCAYAAABobNZCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE2SURBVHgBxZXNTcNAEIXfrMPPBSkluAPEkZtdQaCDUAFEggO3cEIiHKACkgowFTgKDYQOXEIkxIVod5ixCZZQyMHBu9/J3rH9eUbat4RN5MMu9ve6aMrxdbGpTGuFnYNzMCdyl2BbGHOQe4TdyZAOFn/LX0cJ2DzJGzH+HSpgeYD0MlutmFp8L91S3o5Yke9GeMZsdPHzO5VYO1axJyynSK+mVeflqD0SVT7C7K4v0/crL7Gn0rnpIQRs+jr2BCEgc6jy5iGyFRwbBMSUmz8EknxGYvQFISCVO84QAssTo0kjl1P4ZVwnnF2eSbwW8IF67PJGL+tTLb+NYXZzUFsHy7fYfUquV+d8vdV0QQvME7TDGO79aCVWaO1jOoWocyLlnmwJCSFqFkTEc2nmDe7jAelw8bv8BVb/Z6Irx5rMAAAAAElFTkSuQmCC';
var extension_active ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgBlZIBDYAgEEXvTGAEG1jBCEawgUYwik3UBFaggTQ4/zlw0zHk3vYV5z0OGEwJRKTGS+OZ2VMOFI/IIW/0e0jOjKyS5wgreKQ/IbJGYRAbvaXL043xOMNJleJVEjJSIY5sOJV2srHpQXRio7lVDOZCYX71LBCnWMsfUVvrzxbRsQt7XnBxXay7AB8abQzS6/awAAAAAElFTkSuQmCC';
var search_icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgBrVSBccIwDJS7QDOCNygbNN2ADZoN2g3aDWCDsAEwATBBYAJggsAE5nV8IJjgGB9/95ec/fpIthQjHXDOZXgU4AdouXwAV+DMGLOTAN58M7DEaw3+cHlF7sFvcKsa0EofIBqAWzKP0NXgMGRoKZyw9Jgk/t0Zg0eCSk3lSSBmymQyfyMPfjFsankMv/6GHnoliUDsQtle09u34FrSMZdr292YHiUdhy5TzfJd0mHFq1RNN+BQ0vHpmzZT5O5uMALa/IzNuzbHbA0rkWgNTPlIkDUDEGPcMgzraTxhOWXXMNDsj1UtODij3tGGoGCAY3BF1lzTvcLLuGpnbALmKtJsG7H249L/l1LXTNRX3782Gsz4cidGXgSeq3bC5gSxXkxRRs5RmwAAAABJRU5ErkJggg==';
var cross ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgBlZPRDYMwDETtTMBCVUeqqqrfwHep1JVaJuoCdXNJPkDE4bBkFKG7p+AzKvN0EdFOTrdRjhR8ZhrwiD3I/Ox5c9SavGJ3+cX7MchnMgoCDbTwrIqBuGYGsmtuQRpmdSGqfexswJDNRjnfScASkgFVMyq4gBCseqZukHIu106q8jnUstUGRu9JK6pdCJOzC6GXZAvR1cCcqKqQFLFd49/4++JAm1HQloT+cq2fCmRZtgcAAAAASUVORK5CYII=';
var prompt_ai_logo ='data:image/png;base64,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';
var profile_image ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHWSURBVHgBnVXhVcJADE59/KcbWCawG1gnEDfoBrKBMAF1AnCC6gTtBuoErRPABmfSfpFwXKH4vZfXI5d8ySW5I6IRcM6l/Enxs2XZR1H0Rf8FE2YsG5adC6PBfnINacyyBoEQFyxzIYFI0JylNDaLMcQJMhIsJZAJqKSZZ7+F/fpSxg0ysQTPgdI0thxIZDgA6ufQPEssqJB5iuw1iVCAuU+caikCJykpXD4hrzx9BX3sZ914hnMEzCh80gL7sdFl0HUNvoE+Z6k9f3VqKAyd86kqePZr6u/BY0duMnvznFt8ZxTGPfWX6cfTf5BeODToqJEK1PxoMqDXHm0CPgst18Tod3SKJxZpWsXGr5Ipyx31ZWxZVgGfPb5Tm/ltwFAno3IH7DAA8YD98q/R5og5nQFGMxkiNXalTt5EXjf+IUeRBm0tGfWNSQIEumwxIRbiU1vjwg6/C1/5ITTacFPi7pZGUMrmJ8s79fNbILo0rKUw9GQvWD+wdLeZTzPzj7owDStpJNzhKVAkQ4ZbGKyvII/NNC0vGeubIQ7pBdvMHd7/kz+MaMApp76WCfU9qFm+sS31lYs0x1r2VoGpOZtVgu5XgQnp+uIGXsyzmQ8Fw1Ieq/0Yn1+ykb1kFsUmuwAAAABJRU5ErkJggg==';
var white_circle_feature ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACISURBVHgBjZFNDYAwDIVbuHADCTgACeAACUhAAhKwgAIkgAMk7MyJoGC8kR22ZWz7ktc2zet+mRyklC1SpWpmPsgHTB10ShsBjT5jiMk0i4j5hqpcrQr/RGEK6MoQakqjySidh9VZUAjSzxWg/yIG5sgFN2sMjeXHuOvdiZ2BDmmASt1azV98AbMIt/IT3XkcAAAAAElFTkSuQmCC';
var dull_circle_feature ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKSURBVHgBjZEhDoAwDEXbKiRyEonkCEgkR+CISCQSiURyBCRu/JJCGhJgP2nWra/N2jI9FGMMODL1mXn1MXZQgaOBBRffYCOS5hs2sKN3DUiYxC4tfatGwUysav4Daw+VJICXglC6doUXdRLgRdClgtMfqDM/vwFn/EhYYf3J+VebTEm2QWj2WzwAAm4lbo35U3kAAAAASUVORK5CYII=';
var star ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD1SURBVHgBtVHdEcFAEP7uePAgKCHpgA6iAtEBFRgV0IISVIAK6EAJZ2I8ywwPHpy1iyMy8ffgm7nZ2518P5sD/okKrZc/EWpkah7FkwrFxHXOff2Tw0AIci+R8asUG6n4HC3eikuZTCi9qx5tWiIoSXSW5JHpSEq5a+hI6l4FC6kKx6ECQsvniVSmdchORtxuZyuzzM6dq8h1px6BIpVVemBFwKIA209UkFyIrOKfUDD4AgTb3qlgelmDFVYWtsHjsSjnfJ+I2wm26Uj3qGnIX+Nh5CJqFnXx0tA5cUapbpZHegn3ju8evZg3ZNeugvYPvP8r4hme1IGLzW1v1wAAAABJRU5ErkJggg==';
var browse ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjSURBVHgBbY5BEYAwDAQ3UYIEFKAFFBQeIILhAQpACxioBJQ0pP3S/V5yt0Lm2QJJRsQajIikg265hHvtQU9+2KSIBqpoUK9p66E1CvLWM6KHPl7DpZRu3v1gKJblIzfZlG0//4se35jafCgAAAAASUVORK5CYII=';
var plugins ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADnSURBVHgBhVG7DcJADLWdNHQnWCAjhAmg5FcwAozABIQRmADYgAIhOrIBbAALgK6hxMYXFBKicDzpdL7zs/1sA1Qgptd1B34AK+QIKLi8PTLF235dDaCvVxDGRTREUFdBWv0xCK3UNlCPK/CjjTa17wpCcw/ZQWU2JiVJ4iPnQoyYbsbLmhYziIHw+KeSgmefKUlzeNIr9vIFzmE2c6KOlyzaOLnmeRkqWSeEkTczykZ3kjiTarwLYJmqYetiXcCmrBHvuwSt27AU/wzb3Azxvk/EjFIIONLSRVbmLQR0hienaA/X/PsFoPlKHD+bmSwAAAAASUVORK5CYII=';
var default_photo ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgBxVjtUcMwDFV6/Ccb1CN0A8oEsAEZASYAJmCElgnKBkknoBvETECZQEiNXFzHjaPSpO9O9dVfepZlyU4GCiBiTkWuGLLNsmzbt3MGxxXPqbgh4dKInAomtCFZkyyJoO01ildPUuKwWJCYUHcWEOEOZWAFK6v6khW6uhSMlLytU5IZtOe9jVqJiZDUHvtStupsoPlmJCtPRy1+2Oq48Dq9wIDg+f1Fh43Ga1zBCMBDv5zDEaaznpPxAu55oqip0+Pn0Z3wWNY9JjHYPm01yTMogX8+WvqV31L5kRic46GTh3gEHZmVb4SJ1Dsz28T4ArqD35tyy76kNDsyweBU6H6ANAroj70+5sGW0awkP1OfGK4nQYVNDEi1MzbQH9b/MwEd3iE9eQUnQkWG8sgSugk9aa4MIa5ACVJWkLNZaJzZSHVF8kptlesnB8MlRxYeY/0+LeBhKihAgdgxxiYZll7swkiAXIjewquf/otMhMgz9keNhxl8qt6mDiJvVGgisIEggKrIYHP5MvJ345wVm7ykSgUxJMlgk95ZGTtjHrS5u+0czoCQjPEUseIFyX3H+PxcRByZVlzA+F14aPxMgiCVi0XGJsLxa+sisJXSQOMfBsbFziBXHhkDzaPtDsbHLrk6y6ylPDX9/xdrn0wFl8WSf3ZkJHlVcBns3977562cok8Y13ktKJ64Q6LGyOM/RmiJw6LEyPWj6/uMgeamz8e9lZeUsCJ8aqpjF6wMFMCBv1z9AuqNVn+aBB3fAAAAAElFTkSuQmCC'