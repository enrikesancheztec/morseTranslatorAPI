exports.authenticate = function (username, password) {    
    let storedPassword = usersMap.get(username);

    if (password !== undefined && password == storedPassword) {
        return true;
    } else {
        return false;        
    }
};

let usersMap = new Map()
usersMap.set('jruiz', 'A00758756');
usersMap.set('aquintana', 'A01245057');
usersMap.set('aperez', 'A01561786');
usersMap.set('obaeza', 'A01561804');
usersMap.set('pruiz', 'A01561869');
usersMap.set('areyes', 'A01562038');
usersMap.set('mmarquez', 'A01566608');
usersMap.set('cmartinez', 'A01566625');
usersMap.set('salcerreca', 'A01568008');
usersMap.set('ealmanza', 'A01568010');
usersMap.set('ggranados', 'A01568072');
usersMap.set('vguerra', 'A01568075');
usersMap.set('khernandez', 'A01568081');
usersMap.set('ssalazar', 'A01568158');
usersMap.set('jsosa', 'A01568170');
usersMap.set('mtorres', 'A01568181');
