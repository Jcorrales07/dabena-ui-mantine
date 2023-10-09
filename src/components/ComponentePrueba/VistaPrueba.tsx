function VistaPrueba({ text }: { text: string }) {
  return (
    <div
      style={{
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '60px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '512px',
          height: '512px',
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default VistaPrueba;
