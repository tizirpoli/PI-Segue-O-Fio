function createUser(id, fullName, userName, email, phone, password, bio, avatarFile) {
    return {
        id,
        fullName,
        userName,
        email,
        phone,
        password,
        bio,
        avatarFile,
    }
}

module.exports = { createUser };