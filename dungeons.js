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
            dungeonName: "Crucibal of Eternity",
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

function generateDungeonPaths(n, frequenter, availablePaths) {
    if (frequenter) {
        return generateFrequenterDungeonPaths(availablePaths, n);
    } else {
        return generateNonuniqueDungeonPaths(availablePaths, n);
    }
}

function validateNumberOfDungeons(numberOfDungeons) {
    if (numberOfDungeons <= 0) {
        alert('Number of dungeons must be >= 0');
        return false;
    } else {
        return true;
    }
}

function generateTableCell(cellData) {
    let cell = '<td>' + cellData.toString() + '</td>';
    return cell;
}

function generatePathTableCell(pathName, pathNumber) {
    let cell = '<td>'
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
    table.innerHTML = generateDungeonTableHeader();
    table.innerHTML = generateDungeonTableHeader();
    for (let i = 0; i < dungeonPaths.length; i++) {
        let dungeonPath = dungeonPaths[i];
        let tableRow = generateDungeonTableRow(dungeonPath);
        table.innerHTML += tableRow;
    }
}

function generateDungeonTableHeader() {
    let tableHeader = '<tr>'
    tableHeader += generateTableCell('Dungeon');
    tableHeader += generateTableCell('Path');
    tableHeader += generateTableCell('Waypoint');
    tableHeader += generateTableCell('PathID');
    return tableHeader;
}

function generateDungeonTableRow(dungeonPath) {
    let tableRow = '<tr>';
    tableRow += generateTableCell(dungeonPath.dungeonName);
    tableRow += generatePathTableCell(dungeonPath.pathName, dungeonPath.pathNumber);
    tableRow += generateTableCell(dungeonPath.waypointCode);
    tableRow += generateTableCell(dungeonPath.pathID);
    tableRow += '</tr>';
    return tableRow;
}

function generateDungeonTable(dungeonPaths) {
    let table = document.getElementById('dungeonTable');
    table.innerHTML = generateDungeonTableHeader();
    for (let i = 0; i < dungeonPaths.length; i++) {
        let dungeonPath = dungeonPaths[i];
        let tableRow = generateDungeonTableRow(dungeonPath);
        table.innerHTML += tableRow;
    }
}

function checkFrequenterEnabled() {
    let checkbox = document.getElementById('dungeonFrequenter');
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
        alert('Invalid list of pathIDs (comma separated integers)')
        return false;
    }
    let pathIDList = pathIDString.split(',');
    pathIDList = stringListToInts(pathIDList);
    for (pathID of pathIDList) {
        if (!(validPathIDs.includes(pathID))) {
            alert('Invalid pathID: ' + pathID)
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

function handleForm(event) {
    event.preventDefault();
    const numberOfDungeons = document.getElementById('numberOfDungeons').value;
    const frequenterEnabled = checkFrequenterEnabled();
    const excludePathIDs = document.getElementById('excludePathIDs').value.trim();
    const allAvailablePaths = generatePathList(dungeonData);
    const validPathIDs = generateValidPathIDList(allAvailablePaths);
    let availablePaths = allAvailablePaths;
    if (validateNumberOfDungeons(numberOfDungeons)) {
        if (numberOfDungeons >= 200) {
            alert('That\'s a lot of dungeons. Your browser may not like it.');
        }
        if (excludePathIDs != '') {
            nExcludePathIDs = normalisePathIDList(excludePathIDs, validPathIDs);
            availablePaths = cullAvailablePaths(availablePaths, nExcludePathIDs);
            if (frequenterEnabled && availablePaths.length < 8) {
                alert('You\'ve excluded too many dungeons!');
                return;
            }
        }
        let dungeonPaths = generateDungeonPaths(numberOfDungeons, frequenterEnabled, availablePaths);
        generateDungeonTable(dungeonPaths);
    }

}

function createButtonListener() {
    document.getElementById('generate').addEventListener('click', handleForm);
}