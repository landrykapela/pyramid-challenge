/**
 * Created by Landry Kapela
 * 19th August 2019
 */

const drawMountain = (
  MaximuMidCharacterharactersPerLine,
  incrementFactor,
  MidCharacter,
  leftMountainBorder,
  rightMountainBorder
) => {
  /*the line array holds characters to be displayed in the line. It is initialized with white spaces to hold spaces around the mountain*/
  let line = new Array(MaximuMidCharacterharactersPerLine + 1);
  for (p = 0; p < line.length; p++) {
    line[p] = " ";
  }
  for (let i = 1; i <= line.length; i += incrementFactor) {
    let numberCharacters = i % 2 == 0 ? i + 1 : i;
    /*midpoint holds the index of the mid character in the line array
   Here I use parseInt on division to be sure that I always get the lower interger result of division since n/2 can sometimes bring decimals
   */
    let midpoint = parseInt(MaximuMidCharacterharactersPerLine / 2) + 1;
    //set midcharacter to "-" if the number of characters is even and "*" otherwise
    if (i % 2 == 0) {
      line[midpoint] = "-";
    } else {
      line[midpoint] = "*";
    }

    //always put a start in the middle of the first line
    if (numberCharacters === 1) {
      line[midpoint] = "*";
    } else {
      //put special characters half-way left and half-way right of the mid character
      for (let l = 1; l <= parseInt(numberCharacters / 2); l++) {
        if (l == parseInt(numberCharacters / 2)) {
          line[midpoint - l] = leftMountainBorder;
          line[midpoint + l] = rightMountainBorder;
        } else {
          line[midpoint - l] = "*";
          line[midpoint + l] = "*";
        }
      }
    }
    console.log(line.toString().replace(/,/g, ""));
  }
};

drawMountain(100, 3, "-", "/", "\\");
