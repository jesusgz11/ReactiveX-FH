import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo justo ac dui tincidunt dapibus. Sed ut lectus quam. Sed commodo vulputate posuere. In dictum hendrerit finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam et interdum libero. Quisque sit amet mollis nisl. Cras vitae augue eu lacus rhoncus maximus ultricies non velit. Pellentesque molestie, mi et tincidunt iaculis, nibh enim feugiat eros, eu rhoncus lectus metus vitae sem. Cras congue accumsan magna, non ullamcorper sem posuere nec. Vivamus eu magna viverra, cursus odio nec, dapibus urna.
<br><br>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla blandit eleifend urna vehicula tempus. Cras rutrum urna ut rutrum convallis. Maecenas egestas efficitur orci, nec accumsan felis mollis non. Vestibulum lobortis nisi non venenatis molestie. Pellentesque et ultrices dui. Vestibulum sit amet euismod orci, at lacinia mi.
<br><br>
Duis sollicitudin magna augue, et convallis enim maximus sed. Aenean interdum nisi at ligula molestie tincidunt. Aenean iaculis eros eget pellentesque aliquet. Suspendisse dignissim a neque eget lobortis. Vivamus ac sodales nisi. Vestibulum rutrum vulputate sapien non dapibus. Mauris quam nulla, efficitur et viverra ac, sodales at nisi.
<br><br>
Nunc congue, massa eu maximus venenatis, dolor mi laoreet nibh, et dapibus tortor diam vitae sapien. Aliquam id dolor aliquet, dictum lorem in, eleifend leo. In leo massa, tempor sed ultrices id, tempus vitae erat. Nulla elit justo, venenatis sit amet iaculis vel, varius at lacus. Sed eros lorem, rhoncus nec aliquam dapibus, feugiat ut arcu. Fusce elementum, purus ut tincidunt venenatis, nisl ligula faucibus elit, nec cursus velit dolor venenatis urna. Aliquam euismod turpis efficitur, tempor diam a, accumsan diam. Ut quis est aliquet, posuere sem non, ullamcorper nunc. Quisque auctor in dolor et tempus. Praesent aliquet ut ipsum et tempus. Integer mi dolor, ullamcorper sit amet facilisis id, tincidunt sit amet massa. Phasellus pulvinar porttitor quam et maximus. Nam eu iaculis velit. Ut scelerisque sollicitudin augue a tincidunt. Nam finibus ex id ligula mattis commodo.
<br><br>
Duis efficitur dictum felis vel tempus. Phasellus non malesuada ex. Vestibulum posuere enim non tristique lobortis. Praesent at ipsum eu ligula cursus ultricies nec nec nunc. Aenean facilisis varius nibh quis venenatis. Donec eget neque a augue iaculis efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet nunc a lectus tincidunt mollis quis eget felis. Aenean tempor risus eu suscipit tempor. Aliquam sit amet nisi facilisis, blandit est id, tempor enim. Sed rutrum ligula sed justo luctus semper. Praesent vel mauris mi.
<br><br>
Proin ornare diam augue, ac scelerisque metus laoreet a. Nunc sed gravida mi. Maecenas posuere, tellus a faucibus aliquet, massa ligula faucibus mauris, nec laoreet orci dui et sem. Aenean sed augue ut urna rutrum dapibus non vitae sem. In nisi dolor, aliquam sit amet hendrerit in, euismod a odio. Donec id dapibus turpis, in interdum magna. Donec ultricies sodales purus in fermentum. Praesent feugiat tortor nec suscipit placerat.
<br><br>
Pellentesque porta ante sit amet lectus venenatis tincidunt. Quisque nibh augue, efficitur eget nulla a, efficitur pretium ante. Sed vel urna in arcu maximus elementum quis a mauris. Phasellus tristique finibus arcu. Praesent non lacinia mauris, vitae aliquam erat. Aenean nec fringilla augue, non scelerisque eros. Mauris tempus vel elit quis commodo. Nulla facilisi. Aenean convallis sapien eu mi tristique feugiat.
<br><br>
Vestibulum a tristique ligula. Fusce semper dui ut leo ornare pharetra. Pellentesque ac luctus mi. Nam mauris tellus, aliquet non egestas quis, viverra quis neque. Aenean cursus, nisi nec rhoncus feugiat, quam metus faucibus sapien, eu efficitur libero lacus ut risus. Curabitur rhoncus magna at leo commodo semper a et nibh. Suspendisse potenti. Quisque nec mauris et purus efficitur ullamcorper. Cras et interdum felis. Nulla velit nisl, vestibulum ac egestas sit amet, malesuada in ex. Donec sed neque pulvinar, rutrum nibh vitae, ornare mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vitae mi purus.
<br><br>
Donec ultricies non tellus quis tristique. Sed vestibulum velit nec mauris consectetur, et volutpat nisl facilisis. Sed non tincidunt sem, sed ultrices felis. Donec mi magna, efficitur at mauris sit amet, laoreet lacinia dui. Curabitur cursus in erat at vehicula. Maecenas sodales, erat pharetra ornare ornare, sapien arcu ultricies nisi, egestas fringilla mi felis nec leo. Phasellus iaculis ipsum vel blandit iaculis. Donec vitae leo eu erat blandit sagittis. Curabitur dapibus a nisi non varius. Sed ornare, felis vel iaculis finibus, tortor dolor egestas ipsum, sit amet vehicula lectus ex in ligula. Nulla nec sagittis nisl.
<br><br>
Suspendisse mattis tincidunt nisi, eget imperdiet justo mattis id. Morbi sed tellus et nunc facilisis hendrerit. Vivamus tortor leo, vestibulum a lacus at, iaculis varius sapien. Vestibulum bibendum, augue et porttitor viverra, eros arcu rutrum nisi, nec tincidunt metus velit et lacus. Maecenas non pretium orci. Aliquam congue justo vitae varius tempor. Fusce massa odio, ornare eget erat quis, iaculis aliquam magna. Phasellus quis tempor mauris. In elementum ex risus, sed ornare nisl malesuada sit amet.
<br><br>
Nulla facilisi. Vivamus imperdiet mauris odio, ut tempus metus placerat at. Pellentesque sapien nulla, porta ut libero quis, hendrerit suscipit justo. Nullam placerat orci quis quam vestibulum, dignissim dapibus metus maximus. Aenean in rhoncus diam. Praesent sit amet eros non ipsum mattis tempus. Donec finibus sodales sem, eu hendrerit ipsum congue vitae.
<br><br>
Integer sit amet pellentesque nisi. Nunc gravida tellus nec sem pellentesque, a facilisis erat congue. Vestibulum vitae sapien lacinia, pharetra metus et, congue quam. Suspendisse maximus ornare sodales. Phasellus vitae luctus justo, eu consequat quam. Suspendisse facilisis et turpis eu ultricies. Curabitur commodo purus vel neque posuere, nec congue nisi maximus. Ut vulputate neque at dolor volutpat, eget congue massa congue. Donec vel varius nisi.
<br><br>
Proin porta sed odio nec pharetra. Morbi non ex non lacus euismod bibendum id ac velit. Quisque porta libero non lectus placerat pulvinar in eget arcu. Sed posuere venenatis ligula, vitae pharetra augue porta at. Phasellus id ullamcorper sapien. Nulla vel urna quam. In hac habitasse platea dictumst. Curabitur sed sollicitudin metus, eu blandit dolor.
<br><br>
Aliquam erat volutpat. Suspendisse potenti. Mauris ac nisi ac quam ultricies blandit in non augue. Etiam nec tristique quam. Fusce a molestie urna, ut dignissim sem. Fusce in mauris condimentum neque placerat consequat. Quisque elit magna, faucibus et vulputate at, dictum et urna. Nulla eget lacus laoreet, ultricies odio at, tincidunt mauris. Etiam nunc urna, hendrerit vitae augue sit amet, ultricies egestas felis.
<br><br>
Vivamus scelerisque placerat mi in venenatis. Etiam at dapibus eros. Nam sodales nulla dolor, vel porta urna gravida sed. Curabitur congue sem nec massa pulvinar feugiat. Praesent consequat eu ligula condimentum lacinia. Pellentesque pellentesque ullamcorper iaculis. Etiam auctor elit at aliquam blandit.
<br><br>
Vestibulum eu sapien libero. Morbi auctor mollis odio eu pellentesque. Proin venenatis eros eu interdum placerat. Cras arcu eros, ultricies ac suscipit vel, laoreet eu ante. Aenean iaculis turpis eu posuere porttitor. Duis eget tellus vitae ante commodo consequat et at lorem. Integer eu nisi tellus. Proin vitae sagittis velit. Aenean ligula lacus, pharetra vel nisl sed, commodo vehicula magna. In tristique orci non dolor lobortis, nec ornare purus cursus. Phasellus id dictum magna.
<br><br>
Proin mollis dignissim justo. Quisque sed mollis tortor. Sed vel sagittis sapien. Duis tincidunt metus non molestie sagittis. Vestibulum rutrum tellus id nisl mattis viverra. Mauris ultrices accumsan orci, eu tincidunt purus facilisis ut. Maecenas et urna mi. Nam sit amet cursus mi. Phasellus ultrices nibh non ultrices ultricies.
<br><br>
Morbi commodo turpis et urna dignissim consectetur. Sed ultrices dui sed enim dapibus, a rutrum neque laoreet. Donec luctus eu tortor sed porttitor. Integer pellentesque lacus sit amet massa faucibus maximus. Pellentesque pulvinar nibh ut ex dictum, ut commodo diam tincidunt. Ut tempor diam eu enim vestibulum finibus. Ut placerat, lorem vulputate dapibus volutpat, nisl ex ullamcorper sapien, et ullamcorper mi lorem facilisis massa. Fusce mollis et lorem et lacinia. Duis venenatis et leo sit amet faucibus. Phasellus vel libero sed odio tempus ornare a sed enim. Vivamus bibendum, lacus ac ornare facilisis, ligula ipsum euismod mauris, a bibendum elit nunc nec eros. Aliquam aliquet lobortis interdum. Donec sed maximus nisi.
<br><br>
Duis nec vestibulum velit. Sed ut imperdiet tellus. Nullam accumsan accumsan massa, quis luctus dui efficitur ac. Donec tristique, neque vitae gravida posuere, ex turpis consequat erat, ut sodales metus arcu a tellus. Praesent aliquam odio non sem interdum, ac convallis erat semper. Nam viverra nisl vitae sem consectetur condimentum. Nulla facilisi. Proin commodo diam in felis tempus, sit amet consectetur nunc facilisis. Nam accumsan nisi eu dignissim dapibus. Vivamus dapibus eros quis ex tempus aliquam. Sed fermentum, ex non viverra mollis, libero quam placerat metus, non condimentum tortor erat non lorem.
<br><br>
Sed ut vehicula risus, sed auctor arcu. Aliquam consequat, sem vel semper pellentesque, ante nunc laoreet dolor, nec semper felis nibh id turpis. Ut at aliquet nisi. Morbi aliquet tellus metus, sit amet accumsan nibh convallis ut. Duis lacus massa, pretium in facilisis vitae, ultricies sit amet diam. Sed commodo ante quis porta porta. Praesent sit amet quam porttitor, ullamcorper metus ut, pharetra libero. Nam eget leo ac magna facilisis finibus sit amet vitae est.
<br><br>
Nunc mollis orci sagittis tempus laoreet. Etiam urna turpis, porta eget libero vitae, viverra commodo dolor. Nulla condimentum libero turpis, eu scelerisque eros mollis nec. Pellentesque in eros viverra, tincidunt tellus id, accumsan libero. In faucibus vitae nisi nec rutrum. Donec aliquam consequat lacus in condimentum. Etiam ultricies velit et neque molestie, a interdum ligula elementum. Vivamus sagittis dolor pharetra nulla iaculis, eu pellentesque nisi euismod. Sed malesuada dolor et ipsum tempor, non facilisis ligula fermentum.
<br><br>
Sed consectetur dolor sit amet tempor rutrum. Nullam vestibulum est arcu, vitae tristique nisi pharetra eget. Quisque tincidunt nisi at leo aliquet placerat. Nulla hendrerit eu sem sed finibus. Fusce tincidunt nibh diam, quis aliquet mauris ullamcorper id. Donec facilisis risus vel dolor accumsan, at ullamcorper velit sollicitudin. In hac habitasse platea dictumst.
<br><br>
Sed condimentum lacus ac faucibus lacinia. Etiam nec tristique sem. Nullam aliquam tempor nisi. Suspendisse laoreet tortor sed nunc congue iaculis. Curabitur non urna elit. Pellentesque et dolor sit amet turpis volutpat scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Integer dictum condimentum lacus, vitae ultrices sapien sollicitudin sit amet.
<br><br>
Integer ullamcorper venenatis lacus, in efficitur magna feugiat sit amet. Suspendisse efficitur urna sed ultrices porta. Praesent risus purus, pellentesque efficitur fermentum id, volutpat quis risus. Proin gravida, sem ut malesuada vestibulum, mauris velit ullamcorper ipsum, eget feugiat ligula urna non erat. Aenean sagittis id augue in rutrum. Maecenas venenatis tristique magna nec posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In porttitor enim in dolor consectetur bibendum. Phasellus id dui facilisis, lobortis ex at, vulputate purus.
<br><br>
Suspendisse egestas eros diam. Suspendisse potenti. Nullam non sagittis mauris, vitae facilisis turpis. Integer vestibulum erat ac elit aliquam congue. Proin vitae orci gravida orci iaculis blandit eu vel nisl. Sed volutpat libero eget erat bibendum hendrerit. Phasellus aliquet dolor elit, eu ornare sem sollicitudin id. Suspendisse mollis imperdiet aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec mattis turpis dolor, non varius dui scelerisque sed. Suspendisse orci ipsum, dapibus sit amet viverra cursus, efficitur eget ex. Donec tempor, augue vel finibus cursus, justo turpis eleifend mauris, eget mollis sem justo eget lorem. Pellentesque convallis hendrerit ante non interdum. Pellentesque purus augue, ultrices vitae purus ac, consequat pharetra odio. Phasellus eleifend sapien dolor, at lacinia orci aliquam sit amet.
<br><br>
Curabitur at imperdiet arcu. Nullam tristique vel neque vel condimentum. Nulla fringilla augue rutrum pharetra placerat. Sed eu pellentesque dui. Nullam id imperdiet tellus. Nullam mollis orci ut lorem lacinia, efficitur tristique dui sollicitudin. Donec facilisis sodales dui id rhoncus. Mauris magna elit, suscipit ac commodo sit amet, auctor porttitor massa. Aliquam tincidunt enim ut nunc ornare luctus. Aliquam rhoncus, magna nec maximus bibendum, neque eros consequat leo, non lobortis nunc risus et velit. Morbi accumsan justo id purus dignissim, at pharetra turpis malesuada. Donec nibh eros, lacinia eu massa et, sagittis molestie urna. Curabitur turpis ligula, vehicula a vestibulum sed, accumsan eu mauris. Curabitur ut purus eu dui fermentum pulvinar a nec felis. Sed id mattis velit, facilisis hendrerit augue.
<br><br>
Nam ultrices porta porta. Mauris urna odio, lacinia in vulputate volutpat, laoreet eget tellus. Integer efficitur lectus vel nulla tempus, at pulvinar nibh posuere. Integer venenatis erat non sagittis tristique. Praesent enim ipsum, molestie ac enim eget, fringilla lobortis sapien. Nullam porta tristique eros, a tincidunt elit placerat nec. Quisque semper vestibulum erat, dignissim faucibus diam volutpat facilisis. In metus dui, ultricies et fermentum vitae, interdum vel erat.
<br><br>
Donec pretium congue massa a fermentum. Aliquam id metus nisl. Etiam viverra lacus nisl, eget iaculis nulla efficitur a. Aliquam erat volutpat. Aliquam vitae ante diam. Fusce ac interdum lorem. Nunc ut luctus sem. Mauris sollicitudin nisl eu tortor faucibus, sed accumsan sem rutrum.
<br><br>
Proin ligula nulla, placerat ac vehicula ut, dapibus quis justo. Quisque congue mattis arcu. Vivamus a ipsum consequat, condimentum tortor tempor, ultrices odio. Nam dolor nisl, tristique eu mollis ac, tempor non dolor. Vivamus eu efficitur ipsum, nec tempus augue. Duis tempor ipsum rhoncus, elementum ligula ut, ultricies ipsum. Suspendisse eu dolor et justo dignissim faucibus. Vestibulum a mauris non felis hendrerit vehicula sit amet a lacus. Sed urna mi, scelerisque et sapien at, consectetur sollicitudin velit. Duis in placerat tellus. Duis eleifend turpis blandit odio blandit, eget ultricies sapien mollis. Quisque vestibulum orci lectus, nec interdum velit ullamcorper ac. Nullam vel porta nunc.
<br><br>
Mauris a ornare arcu, in pellentesque quam. Aliquam vehicula ante vel vestibulum luctus. Maecenas ac lobortis arcu. Proin tincidunt tincidunt fermentum. Aliquam sit amet blandit nibh. Praesent et fringilla nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sagittis ullamcorper imperdiet. Sed leo enim, tincidunt vel lectus eget, laoreet pellentesque sem. Praesent convallis facilisis tellus, ac pellentesque tortor viverra et. Quisque pharetra vulputate arcu a dictum.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Funcion para calcular %

interface CustomScrollValues {
  clientHeight: number;
  scrollTop: number;
  scrollHeight: number;
}
interface CustomDocumentElement {
  documentElement: CustomScrollValues;
}
interface CustomScrollEvent {
  target: CustomDocumentElement;
}

const calcularScroll = (event) => {
  const customEvent = event as CustomScrollEvent;

  const { clientHeight, scrollTop, scrollHeight } =
    customEvent.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Stream
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(map(calcularScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
