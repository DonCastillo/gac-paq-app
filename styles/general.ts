const GeneralStyle = {
    kid: {
        field: {
            fontSize: 18,
            fontWeight: "400",
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 20,
            // paddingVertical: 3,
            paddingVertical: 18,
            minHeight: 60,
            marginBottom: 15,
            marginTop: 15,
            borderColor: "#000",
        },
    },
    adult: {
        questionContainer: {
            maxHeight: 450,
            borderRadius: 20,
            height: "auto",
            width: "100%",
            backgroundColor: "white",
            padding: 20,
            shadowColor: "#000",
            shadowOffset: {width: 0.5, height: 1},
            shadowOpacity: 0.2,
            shadowRadius: 2,
        },
        optionContainer: {
            paddingVertical: 4,
            paddingHorizontal: 10,
            marginBottom: 5,
            width: "100%",
            flex: 1,
        },
        optionText: {
            fontSize: 16,            
        }
    },
};

const DefaultStyle = {
    button: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "#fff",
        lineHeight: 27,
        minWidth: 100
    },

};

export { GeneralStyle, DefaultStyle };
