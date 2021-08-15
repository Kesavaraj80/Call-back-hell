const head = document.createElement("h1");
setTimeout(() => {
  head.innerText = "10";
  document.body.append(head);
  setTimeout(() => {
    head.innerText = "9";
    document.body.append(head);
    setTimeout(() => {
      head.innerText = "8";
      document.body.append(head);
      setTimeout(() => {
        head.innerText = "7";
        document.body.append(head);
        setTimeout(() => {
          head.innerText = "6";
          document.body.append(head);
          setTimeout(() => {
            head.innerText = "5";
            document.body.append(head);
            setTimeout(() => {
              head.innerText = "4";
              document.body.append(head);
              setTimeout(() => {
                head.innerText = "3";
                document.body.append(head);
                setTimeout(() => {
                  head.innerText = "2";
                  document.body.append(head);
                  setTimeout(() => {
                    head.innerText = "1";
                    document.body.append(head);
                    setTimeout(() => {
                      head.innerText = "Happy New Year 2021";
                      document.body.append(head);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
