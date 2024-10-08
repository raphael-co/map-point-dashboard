// screens/LoginScreenTheme.tsx

export const lightTheme = {
    container: {
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: 'transparent',
        // maxWidth: 400,
        width: '100%',
        height: 'calc(100vh - 150px)',
    },
    title: {
        fontSize: '24px',
        marginBottom: '8px',
        textAlign: 'center' as 'center',
        color: '#333',
    },
    subtitle: {
        fontSize: '14px',
        marginBottom: '24px',
        textAlign: 'center' as 'center',
        color: '#666',
    },
    input: {
        outline: 'none',
        height: '48px',
        borderColor: '#ddd',
        borderWidth: '1px',
        borderRadius: '8px',
        marginBottom: '12px',
        backgroundColor: '#fff',
        color: '#333',
        width: 'calc(100% - 20px)',
        padding: ' 0px 10px'
    },
    placeholder: {
        color: '#999',
    },
    error: {
        color: 'red',
        marginBottom: '12px',
    },
    forgotPassword: {
        textAlign: 'right' as 'right',
        color: '#007aff',
        marginBottom: '24px',
    },
    buttonPrimary: {
        backgroundColor: '#007aff',
        borderRadius: '8px',
        padding: '12px',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        marginBottom: '12px',
        width: '100%',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer' as 'pointer',
        border: 'none',
    },
    buttonSecondary: {
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '12px',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        marginBottom: '12px',
        width: '100%',
        color: '#333',
        fontSize: '16px',
        cursor: 'pointer' as 'pointer',
        border: '1px solid #ddd',
    },
    footer: {
        display: 'flex' as 'flex',
        justifyContent: 'center' as 'center',
        marginTop: '16px',
    },
    footerText: {
        color: '#333',
    },
    footerLink: {
        color: '#007aff',
        cursor: 'pointer' as 'pointer',
    },
};

export const darkTheme = {
    container: {
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center' as 'center',
        backgroundColor: '#282828',
        height: '100%',
        flex: 1,
        // maxWidth: 400,
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: '24px',
        marginBottom: '8px',
        textAlign: 'center' as 'center',
        color: '#fff',
    },
    subtitle: {
        fontSize: '14px',
        marginBottom: '24px',
        textAlign: 'center' as 'center',
        color: '#aaa',
    },
    input: {
        outline: 'none',
        height: '48px',
        borderColor: '#333',
        borderWidth: '1px',
        borderRadius: '8px',
        marginBottom: '12px',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        width: 'calc(100% - 20px)',
        padding: ' 0px 10px'
    },
    placeholder: {
        color: '#777',
    },
    error: {
        color: 'red',
        marginBottom: '12px',
    },
    forgotPassword: {
        textAlign: 'right' as 'right',
        color: '#bb86fc',
        marginBottom: '24px',
    },
    buttonPrimary: {
        backgroundColor: '#bb86fc',
        borderRadius: '8px',
        padding: '12px',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        marginBottom: '12px',
        width: 'calc(100% - 20px)',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer' as 'pointer',
        border: 'none',
    },
    buttonSecondary: {
        backgroundColor: '#333',
        borderRadius: '8px',
        padding: '12px',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        marginBottom: '12px',
        width: '100%',
        color: '#bb86fc',
        fontSize: '16px',
        cursor: 'pointer' as 'pointer',
        border: '1px solid #333',
    },
    footer: {
        display: 'flex' as 'flex',
        justifyContent: 'center' as 'center',
        marginTop: '16px',
    },
    footerText: {
        color: '#fff',
    },
    footerLink: {
        color: '#bb86fc',
        cursor: 'pointer' as 'pointer',
    },
};
