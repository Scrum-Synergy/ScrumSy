

export const getStatus = (req, res) => {
    res.json({ isAuthenticated: true, user: req.user });
};

// todo: improve signOut security 
export const signOut = (req, res) => {

    res.status(200).json({ signOut: true });


}
