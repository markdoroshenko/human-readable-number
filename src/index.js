module.exports = function toReadable (number) {

    let readable = ``;
    const arr = [];
    let str = number.toString();

    for ( let i = 0; i < str.length; i++ ) {
        if ( str[i] === '0' ) {
            arr.push( 'zero' );
        }
        if ( str[i] === '1' ) {
            arr.push( 'one' );
        }
        if ( str[i] === '2' ) {
            arr.push( 'two' );
        }
        if ( str[i] === '3' ) {
            arr.push( 'three' );
        }
        if ( str[i] === '4' ) {
            arr.push( 'four' );
        }
        if ( str[i] === '5' ) {
            arr.push( 'five' );
        }
        if ( str[i] === '6' ) {
            arr.push( 'six' );
        }
        if ( str[i] === '7' ) {
            arr.push( 'seven' );
        }
        if ( str[i] === '8' ) {
            arr.push( 'eight' );
        }
        if ( str[i] === '9' ) {
            arr.push( 'nine' );
        }
    }

    if (arr[arr.length - 2] === 'zero' &&  arr[arr.length - 1] === 'zero' ) {
        return readable += `${ arr[arr.length - 3] } hundred`
    }

    if ( arr[arr.length - 3] ) {
        readable += `${ arr[arr.length - 3] } hundred `
    }

    if ( arr[arr.length - 2] === 'zero' ) {
        readable += arr[arr.length - 1];
    }

    if ( arr[arr.length - 2] === 'one' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'ten';
        }
        if ( arr[arr.length - 1] === 'one' ) {
            readable += 'eleven';
        }
        if ( arr[arr.length - 1] === 'two' ) {
            readable += 'twelve';
        }
        if ( arr[arr.length - 1] === 'three' ) {
            readable += 'thirteen';
        }
        if ( arr[arr.length - 1] === 'four' ) {
            readable += 'fourteen';
        }
        if ( arr[arr.length - 1] === 'five' ) {
            readable += 'fifteen';
        }
        if ( arr[arr.length - 1] === 'six' ) {
            readable += 'sixteen';
        }
        if ( arr[arr.length - 1] === 'seven' ) {
            readable += 'seventeen';
        }
        if ( arr[arr.length - 1] === 'eight' ) {
            readable += 'eighteen';
        }
        if ( arr[arr.length - 1] === 'nine' ) {
            readable += 'nineteen';
        }
    }

    if ( arr[arr.length - 2] === 'two' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'twenty';
        } else {
            readable += `twenty ${ arr[arr.length - 1]  }`
        }
    }

    if ( arr[arr.length - 2] === 'three' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'thirty';
        } else {
            readable += `thirty ${ arr[arr.length - 1] }`
        }
    }

    if ( arr[arr.length - 2] === 'four' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'forty';
        } else {
            readable += `forty ${ arr[arr.length - 1] }`
        }
    }

    if ( arr[arr.length - 2] === 'five' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'fifty';
        } else {
            readable += `fifty ${ arr[arr.length - 1] }`
        }
    }

    if ( arr[arr.length - 2] === 'six' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'sixty';
        } else {
            readable += `sixty ${ arr[arr.length - 1] }`
        }
    }

    if ( arr[arr.length - 2] === 'seven' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'seventy';
        } else {
            readable += `seventy ${ arr[arr.length - 1] }`
        }
    }

    if ( arr[arr.length - 2] === 'eight' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'eighty';
        } else {
            readable += `eighty ${ arr[arr.length - 1] }`
        }
    }

    if ( arr[arr.length - 2] === 'nine' ) {
        if ( arr[arr.length - 1] === 'zero' ) {
            readable += 'ninety';
        } else {
            readable += `ninety ${ arr[arr.length - 1] }`
        }
    }

    if ( arr.length === 1 ) {
            readable += `${ arr[arr.length - 1] }`
        }

    return readable;

}
