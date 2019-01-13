declare namespace NodeJS {
    interface Global {
      requestAnimationFrame: (callback:() => any) => any,
      cancelAnimationFrame: (id: any) => void,
      alert: (message: string) => any,
    }
  }