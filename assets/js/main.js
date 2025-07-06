window.addEventListener('load', main); // ✅ Registers the 'main' function to run when the window finishes loading


function main() { // ✅ Main function that initializes the calendar after the page loads
    let sada = new Date(); // ✅ Creates a Date object with the current date and time
    popuniKalendar(sada.getFullYear(), sada.getMonth() + 1); // ✅ Calls the function to fill the calendar with current year and month (months are 0-based in JS)
    document.getElementById('kalendar').style.display = 'table'; // ✅ Makes the calendar table visible by setting its display to 'table'
}

function resetKalendara() { // ✅ Resets the calendar content before drawing a new one
    document.getElementById('title').innerText = ''; // ✅ Clears the month-year title
    document.getElementById('dani').innerHTML = ''; // ✅ Clears all previously inserted day cells
}

function popuniKalendar(godina, mesec) { // ✅ Fills the calendar for the given year and month
    resetKalendara(); // ✅ Clears old data from the calendar

    
          let imenaMeseci = [ // ✅ Array of month names in Serbian
        'januar', 'februar', 'mart', 'april',
        'maj', 'jun', 'jul', 'avgust',
        'septembar', 'oktobar', 'novembar', 'decembar'
    ];

        let imeIzabranogMeseca = prvoSlovoVeliko(imenaMeseci[mesec - 1]); // ✅ Gets the selected month name and capitalizes the first letter
        let t = imeIzabranogMeseca + ' ' + godina; // ✅ Concatenates month and year into a title string
        
        document.getElementById('title').innerText = t; // ✅ Inserts the title into the calendar header

        let prvi = new Date(godina, mesec - 1, 1); // ✅ First day of the month (note: months are 0-indexed)
        let kraj = new Date(godina, mesec, 0); // ✅ Last day of the month (0 returns the last day of the previous month, i.e., the current month)
        
        let dUNP = prvi.getDay(); // ✅ Day of the week for the first day of the month (0 = Sunday)
        if (dUNP == 0) dUNP = 7; // ✅ Adjusts Sunday (0) to 7 so week starts from Monday

        let dUNK = kraj.getDay(); // ✅ Day of the week for the last day of the month
        if (dUNK == 0) dUNK = 7; // ✅ Adjusts Sunday (0) to 7 for consistency

        let brojDana = kraj.getDate(); // ✅ Gets the number of days in the selected month
        let dani = []; // ✅ Initializes an array to store calendar day values


         for (let i = 1; i < dUNP; i++) { // ✅ Fills the empty cells before the first day of the month
        dani.push('');
    }

         for (let dan = 1; dan <= brojDana; dan++) { // ✅ Fills the array with actual days of the month
        dani.push(dan);
    }


         for (let i = dUNK; i < 7; i++) { // ✅ Adds empty cells after the last day to complete the week
        dani.push('');
    }

        // ✅ Splits the days into weeks (arrays of 7 days each)
        let nedelje = []; // ✅ Initializes an array to hold weeks (each week is an array of 7 days)

        while (dani.length > 0) { // ✅ Loops until all day values are split into weeks
        let narednaNedelja = dani.splice(0, 7); // ✅ Removes first 7 items from 'dani' to form a week
        nedelje.push(narednaNedelja); // ✅ Adds the new week to the 'nedelje' array
    }
        // ✅ Logs the weeks to the console for debugging

        console.log(nedelje); // ✅ Logs the weeks to the console for debugging

        popuniTeloKalendara(nedelje); // ✅ Calls helper function to populate the calendar table body


     function popuniTeloKalendara(nedelje) { // ✅ Helper function to render the calendar body rows
        for (let nedelja of nedelje) { // ✅ Loops through each week array
            let red = document.createElement('tr'); // ✅ Creates a new table row

            for (let dan of nedelja) { // ✅ Loops through each day in the current week
                let td = document.createElement('td'); // ✅ Creates a new table cell
                td.innerText = dan; // ✅ Sets the cell's text content to the day number (or empty string)
                red.appendChild(td); // ✅ Appends the cell to the row
            }

            document.getElementById('dani').appendChild(red); // ✅ Appends the entire row to the calendar body
        }
    }
}
// ✅ Function to capitalize the first letter of a string and make the rest lowercase

function prvoSlovoVeliko(str) { // ✅ Capitalizes the first letter of a string and lowers the rest
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // ✅ Combines uppercase first character with rest of string in lowercase
}
// ✅ Function to reset the calendar and fill it with the current month and year

  