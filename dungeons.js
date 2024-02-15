const dungeonData = {
    dungeons: [
        {
            dungeonName: "Ascalonian Catacombs",
            waypointCode: "[&BIYBAAA=]",
            paths: [
                {
                    pathName: "Story",
                    recommendedLevel: 20,
                    pathID: 0
                },
                {
                    pathName: "Hodgins",
                    pathNumber: 1,
                    recommendedLevel: 25,
                    pathID: 1
                },
                {
                    pathName: "Detha",
                    pathNumber: 2,
                    recommendedLevel: 25,
                    pathID: 2
                },
                {
                    pathName: "Tzark",
                    pathNumber: 3,
                    recommendedLevel: 25,
                    pathID: 3
                }
            ]
        },
        {
            dungeonName: "Caudecus Manor",
            waypointCode: "[&BPoAAAA=]",
            paths: [
                {
                    pathName: "Story",
                    recommendedLevel: 40,
                    pathID: 4
                },
                {
                    pathName: "Asura",
                    pathNumber: 1,
                    recommendedLevel: 45,
                    pathID: 5
                },
                {
                    pathName: "Seraph",
                    pathNumber: 2,
                    recommendedLevel: 45,
                    pathID: 6
                },
                {
                    pathName: "Butler",
                    pathNumber: 3,
                    recommendedLevel: 45,
                    pathID: 7
                }
            ]
        },
        {
            dungeonName: "Twilight Arbor",
            waypointCode: "[&BEEFAAA=]",
            paths: [
                {
                    pathName: "Story",
                    recommendedLevel: 50,
                    pathID: 8
                },
                {
                    pathName: "Up",
                    recommendedLevel: 55,
                    pathID: 9
                },
                {
                    pathName: "Forward",
                    recommendedLevel: 55,
                    pathID: 10
                },
                {
                    pathName: "Aetherpath",
                    recommendedLevel: 80,
                    pathID: 11
                }
            ]
        },
        {
            dungeonName: "Sorrow's Embrace",
            waypointCode: "[&BFYCAAA=]",
            paths: [
                {
                    pathName: "Story",
                    recommendedLevel: 60,
                    pathID: 12
                },
                {
                    pathName: "Fergg",
                    pathNumber: 1,
                    recommendedLevel: 65,
                    pathID: 13
                },
                {
                    pathName: "Rasolov",
                    pathNumber: 2,
                    recommendedLevel: 65,
                    pathID: 14
                },
                {
                    pathName: "Koptev",
                    pathNumber: 3,
                    recommendedLevel: 65,
                    pathID: 15
                }
            ]
        },
        {
            dungeonName: "Citadel of Flame",
            waypointCode: "[&BEAFAAA=]",
            paths: [
                {
                    pathName: "Story",
                    recommendedLevel: 70,
                    pathID: 16
                },
                {
                    pathName: "Ferrah",
                    pathNumber: 1,
                    recommendedLevel: 75,
                    pathID: 17
                },
                {
                    pathName: "Magg",
                    pathNumber: 2,
                    recommendedLevel: 75,
                    pathID: 18
                },
                {
                    pathName: "Rhiannon",
                    pathNumber: 3,
                    recommendedLevel: 75,
                    pathID: 19
                }
            ]
        },
        {
            dungeonName: "Honor of the Waves",
            waypointCode: "[&BEMFAAA=]",
            paths: [
                {
                    pathName: "Story",
                    recommendedLevel: 76,
                    pathID: 20
                },
                {
                    pathName: "Butcher",
                    pathNumber: 1,
                    recommendedLevel: 80,
                    pathID: 21
                },
                {
                    pathName: "Plunderer",
                    pathNumber: 2,
                    recommendedLevel: 80,
                    pathID: 22
                },
                {
                    pathName: "Zealot",
                    pathNumber: 3,
                    recommendedLevel: 80,
                    pathID: 23
                }
            ]
        },
        {
            dungeonName: "Crucible of Eternity",
            waypointCode: "[&BEIFAAA=]",
            paths: [
                {
                    pathName: "Story",
                    recommendedLevel: 78,
                    pathID: 24
                },
                {
                    pathName: "Submarine",
                    pathNumber: 1,
                    recommendedLevel: 80,
                    pathID: 25
                },
                {
                    pathName: "Teleporter",
                    pathNumber: 2,
                    recommendedLevel: 80,
                    pathID: 26
                },
                {
                    pathName: "Front Door",
                    pathNumber: 3,
                    recommendedLevel: 80,
                    pathID: 27
                }
            ]
        },
        {
            dungeonName: "Ruined City of Arah",
            waypointCode: "[&BCADAAA=]",
            paths: [
                {
                    pathName: "Story",
                    recommendedLevel: 80,
                    pathID: 28
                },
                {
                    pathName: "Jotun",
                    pathNumber: 1,
                    recommendedLevel: 80,
                    pathID: 29
                },
                {
                    pathName: "Mursaat",
                    pathNumber: 2,
                    recommendedLevel: 80,
                    pathID: 30
                },
                {
                    pathName: "Forgotten",
                    pathNumber: 3,
                    recommendedLevel: 80,
                    pathID: 31
                },
                {
                    pathName: "Seer",
                    pathNumber: 4,
                    recommendedLevel: 80,
                    pathID: 32
                }
            ]
        }
    ]
}

const frequenterSetSize = 8;

function displayMessage(message, type = 'info') {
    const messageTimeout = 5000; // 5 seconds
    const messageContainer = document.getElementById('messageContainer');
    const messageElement = document.createElement('div');
    messageContainer.innerHTML = '';
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);

    // Remove the message after 5 seconds
    setTimeout(() => {
        messageElement.remove();
    }, messageTimeout);
}

function generateRandomPath(availablePaths) {
    let randomPathIndex = Math.floor(Math.random() * availablePaths.length);
    let randomPath = availablePaths[randomPathIndex];
    return randomPath;
}

function generateNonuniqueDungeonPaths(availablePaths, n) {
    let dungeonPaths = [];
    for (let i = 0; i < n; i++) {
        dungeonPaths.push(generateRandomPath(availablePaths));
    }
    return dungeonPaths;
}

function generatePathList(dungeonData) {
    let pathList = [];
    for (dungeon of dungeonData.dungeons) {
        for (path of dungeon.paths) {
            path.dungeonName = dungeon.dungeonName;
            path.waypointCode = dungeon.waypointCode;
            pathList.push(path);
        }
    }
    return pathList;
}

function generateFrequenterDungeonPaths(availablePaths, n) {
    let completeFrequenterSets = Math.floor(n / frequenterSetSize);
    let partialFrequenterSetSize = n % frequenterSetSize;
    let currentFrequenterSet = [];
    let pathList = [];
    for (let i = 0; i < completeFrequenterSets; i++) {
        for (let j = 0; j < frequenterSetSize; j++) {
            let randomPath = generateRandomPath(availablePaths);
            currentFrequenterSet.push(randomPath);
            const index = availablePaths.indexOf(randomPath);
            availablePaths.splice(index, 1);
        }
        for (let k = 0; k < frequenterSetSize; k++) {
            currentPath = currentFrequenterSet.pop();
            pathList.push(currentPath);
            availablePaths.push(currentPath);
        }
    }
    for (let l = 0; l < partialFrequenterSetSize; l++) {
        let randomPath = generateRandomPath(availablePaths);
        pathList.push(randomPath);
        const index = availablePaths.indexOf(randomPath);
        availablePaths.splice(index, 1);
    }
    return pathList;
}

function generateAlternateFrequenterDungeonPaths(availablePaths, n) {
    let previousEightDungeons = [];
    let pathList = [];
    for (i = 0; i < n; i++) {
        let randomPath = generateRandomPath(availablePaths);
        pathList.push(randomPath);
        previousEightDungeons.push(randomPath);
        // Remove path we just added from the pool of available paths
        const index = availablePaths.indexOf(randomPath);
        availablePaths.splice(index, 1);
        // Cycle paths back into the pool of available paths
        if (previousEightDungeons.length === 8) {
            availablePaths.push(previousEightDungeons[0]);
            previousEightDungeons.splice(0, 1);
        }
    }
    return pathList;
}

function generateDungeonPaths(n, alternateFrequenter, availablePaths) {
    if (alternateFrequenter) {
        return generateAlternateFrequenterDungeonPaths(availablePaths, n);
    } else {
        return generateFrequenterDungeonPaths(availablePaths, n);
    }
}

function validateNumberOfDungeons(numberOfDungeons) {
    if (numberOfDungeons <= 0) {
        displayMessage('Number of dungeons must be > 0.', 'error');
        return false;
    } else {
        return true;
    }
}

function generateTableCell(cellData, cellClass) {
    let cell = ''
    if (typeof cellClass !== 'undefined') {
        cell += `<td class="${cellClass}">`;
    } else {
        cell += '<td>';
    }
    cell += cellData.toString() + '</td>';
    return cell;
}

function generateTableHeaderCell(cellData) {
    let cell = '<th>' + cellData.toString() + '</th>';
    return cell;
}

function generateTablePathCell(pathName, pathNumber) {
    let cell = '<td>';
    if (typeof pathNumber !== 'undefined') {
        cell += pathNumber.toString();
        cell += ': ';
    }
    cell += pathName;
    cell += '</td>'
    return cell;
}

function generatePathIDTable() {
    dungeonPaths = generatePathList(dungeonData);
    let table = document.getElementById('pathIDsTable');
    let tableHTML = generateDungeonTableHeader();
    tableHTML += '<tbody>';
    for (let i = 0; i < dungeonPaths.length; i++) {
        let dungeonPath = dungeonPaths[i];
        let tableRow = generateDungeonTableRow(dungeonPath);
        tableHTML += tableRow;
    }
    tableHTML += '</tbody>'
    table.innerHTML = tableHTML;
    waypointCellsEasyClick();
}

function generateDungeonTableHeader() {
    let tableHeader = '<thead><tr>'
    tableHeader += generateTableHeaderCell('Dungeon');
    tableHeader += generateTableHeaderCell('Path');
    tableHeader += generateTableHeaderCell('Waypoint');
    tableHeader += generateTableHeaderCell('PathID');
    tableHeader += '</tr></thead>'
    return tableHeader;
}

function generateDungeonTableRow(dungeonPath) {
    let tableRow = '<tr>'
    tableRow += generateTableCell(dungeonPath.dungeonName);
    tableRow += generateTablePathCell(dungeonPath.pathName, dungeonPath.pathNumber);
    tableRow += generateTableCell(dungeonPath.waypointCode, 'waypointCell');
    tableRow += generateTableCell(dungeonPath.pathID);
    tableRow += '</tr>';
    return tableRow;
}

function generateDungeonTable(dungeonPaths) {
    let table = document.getElementById('dungeonTable');
    let tableHTML = generateDungeonTableHeader();
    tableHTML += '<tbody>';
    for (let i = 0; i < dungeonPaths.length; i++) {
        let dungeonPath = dungeonPaths[i];
        let tableRow = generateDungeonTableRow(dungeonPath);
        tableHTML += tableRow;
    }
    tableHTML += '</tbody>';
    table.innerHTML = tableHTML;
}

function checkAlternateFrequenterEnabled() {
    let checkbox = document.getElementById('alternateDungeonFrequenter');
    return checkbox.checked;
}

function generateValidPathIDList(dungeonPaths) {
    let validPathIDs = [];
    for (path of dungeonPaths) {
        validPathIDs.push(path.pathID);
    }
    return validPathIDs;
}

function stringListToInts(stringList) {
    let intList = [];
    for (string of stringList) {
        int = parseInt(string);
        intList.push(int);
    }
    return intList;
}

function normalisePathIDList(pathIDString, validPathIDs) {
    const validRegexPattern = "^\\s*\\d+\\s*(,\\s*\\d+\\s*)*$";
    const commaListRegex = new RegExp(validRegexPattern);
    if (commaListRegex.test(pathIDString) === false) {
        displayMessage('Invalid list of pathIDs. Expects a comma-separated list of integers.', 'error')
        return false;
    }
    let pathIDList = pathIDString.split(',');
    pathIDList = stringListToInts(pathIDList);
    for (pathID of pathIDList) {
        if (!(validPathIDs.includes(pathID))) {
            displayMessage(`Invalid pathID: ${pathID}`, 'error');
            return false;
        }
    }
    // return an array (but make it a set first to remove duplicates)
    return removeDuplicates(pathIDList);
}

function cullAvailablePaths(initialPaths, cullIDList) {
    let availablePaths = []
    for (path of initialPaths) {
        if (!(cullIDList.includes(path.pathID))) {
            availablePaths.push(path);
        }
    }
    return availablePaths;
}

function removeDuplicates(data) {
    return [...new Set(data)];
}

function toggleRowCSS(alternateFrequenterEnabled) {
    let rowStyle = document.getElementById('rowStyle');
    if (alternateFrequenterEnabled) {
        rowStyle.setAttribute('href', 'alternatingRows.css');
    } else {
        rowStyle.setAttribute('href', 'alternatingBlocks.css')
    }
}

function handleForm(event) {
    event.preventDefault();
    const numberOfDungeons = document.getElementById('numberOfDungeons').value;
    const alternateFrequenterEnabled = checkAlternateFrequenterEnabled();
    const excludePathIDs = document.getElementById('excludePathIDs').value.trim();
    const allAvailablePaths = generatePathList(dungeonData);
    const validPathIDs = generateValidPathIDList(allAvailablePaths);
    let availablePaths = allAvailablePaths;
    toggleRowCSS(alternateFrequenterEnabled);
    if (validateNumberOfDungeons(numberOfDungeons)) {
        if (numberOfDungeons >= 200) {
            alert('That\'s a lot of dungeons. Your browser may not like it.');
        }
        if (excludePathIDs != '') {
            nExcludePathIDs = normalisePathIDList(excludePathIDs, validPathIDs);
            availablePaths = cullAvailablePaths(availablePaths, nExcludePathIDs);
            if (availablePaths.length < frequenterSetSize && availablePaths.length < numberOfDungeons) {
                displayMessage('You\'ve excluded too many dungeons! Cannot find enough unique paths.', 'error');
                return;
            }
        }
        let dungeonPaths = generateDungeonPaths(numberOfDungeons, alternateFrequenterEnabled, availablePaths);
        generateDungeonTable(dungeonPaths);
        waypointCellsEasyClick();
    }
}

function waypointCellsEasyClick() {
    // Thanks ChatGPT
    // Get all the waypoint cells
    const waypointCells = document.querySelectorAll('.waypointCell');

    // Add event listeners to each waypoint cell
    waypointCells.forEach(cell => {
        cell.addEventListener('click', function () {
            // Select the text inside the cell
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(this);
            selection.removeAllRanges();
            selection.addRange(range);
        });
    });

}

function createButtonListener() {
    document.getElementById('generate').addEventListener('click', handleForm);
}