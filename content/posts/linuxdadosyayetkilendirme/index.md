+++
author = "Eren Kaplan"
title = "GNU/Linux'ta Dosya Yetkilendirmeleri"
date = "2024-04-02"
tags = [
    "linux",
]
categories = [
    "linux",
]
+++

Linux işletim sistemlerinde dosya ve klasör izinleri, verilerin güvenliğini sağlamanın kritik bir parçasıdır. Bu yazıda, Linux dosya izinlerini değiştirmenin yöntemlerini ve bu işlemi nasıl yapacağımıza bir bakalım.

![](https://www.veribilimiokulu.com/wp-content/uploads/2017/09/Linux_oktal_eri%C5%9Fim_yetki_%C3%B6rne%C4%9Fi_linux_octal_permission_example.png)
Görsel [veribilimiokulu.com](https://www.veribilimiokulu.com/) sitesinden alınmıştır

ls -l komutu çalıştırdığımız zaman yukarıdaki görsele benzer, satır başlarında drwxr-xr-x tarzında karakterler görmüşsünüzdür. Bunlar sırasıyla dosya türü, sahiplik yetkileri, grup yetkileri ve herkesin görüp göremeyeceğini belirleyen kavramlardır.

Linux'ta, her dosya ve dizin bir sahibe, bir grup ve bir de diğer kullanıcılar olmak üzere üç tür kullanıcıya ait izinlerle yönetilir. Her kullanıcı tipi için, dosyanın veya dizinin okuma, yazma ve çalıştırma gibi farklı izin seviyeleri tanımlanabilir.

- **Okuma (Read) ( r )**: Dosyanın içeriğini görüntülemek veya okumak için izin verir.
- **Yazma (Write) (w)**: Dosyaya yazmak veya içeriğini değiştirmek için izin verir.
- **Çalıştırma (Execute) (x)**: Dosyayı çalıştırmak veya içeriğindeki betikleri yürütmek için izin verir.

Her bir kullanıcı türü için izinler ayrı ayrı belirlenebilir. İzinler genellikle bir sayı dizisi olarak ifade edilir. Örneğin, 735 gibi.

- **İlk rakam (7)**: Dosya sahibinin izinlerini temsil eder.
- **İkinci rakam (3)**: Dosya sahibinin grubunun izinlerini temsil eder.
- **Üçüncü rakam (5)**: Diğer kullanıcıların izinlerini temsil eder.

Her rakam, izinlerin toplamını ifade eder. Örneğin:

- **7 = rwx** (okuma, yazma ve çalıştırma izinleri)
- **3 = -wx** (yazma ve çalıştırma)
- **4 = r-x** (okuma ve çalıştırma izinleri)

Her karakterin de değerleri vardır:

- **r = 4** (okuma)
- **w = 2**(yazma)
- **x = 1** (çalıştırma)

## Örnek olarak

Örnek vermek gerekirse, oluşturmuş olduğumuz LibreOffice Writer dosyasını sadece sahibinin okuyabileceği duruma getirelim:

![](https://i.imgur.com/6eMuZO7.png)

Umarım yazım açıklayıcı olmuştur. İyi günler dilerim 👋🏻

![](/images/insan-yazimi.png)
